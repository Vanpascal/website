"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
const server_1 = require("next/server");
const prisma_1 = require("@/lib/prisma");
const server_2 = require("@/lib/server");
async function POST(req) {
    var _a, _b;
    try {
        const payload = await req.json();
        // Log the incoming webhook payload from Airtel
        console.log("📥 Incoming Airtel webhook payload:", JSON.stringify(payload, null, 2));
        const txnId = (_a = payload.transaction) === null || _a === void 0 ? void 0 : _a.id;
        const code = (_b = payload.transaction) === null || _b === void 0 ? void 0 : _b.status_code;
        if (!txnId || !code) {
            return server_1.NextResponse.json({ error: "Missing transaction id or status code" }, { status: 400 });
        }
        const statusMap = {
            TS: "SUCCESSFUL",
            TF: "FAILED",
        };
        const status = statusMap[code] || "PENDING";
        // Update payment in DB
        const updatedPayment = await prisma_1.prisma.mobilepayments.updateMany({
            where: { localTxnId: txnId },
            data: { status, updatedAt: new Date() },
        });
        // Broadcast to WS clients
        (0, server_2.broadcastPaymentStatus)(txnId, status);
        return server_1.NextResponse.json({
            message: "Status updated",
            status,
            updatedCount: updatedPayment.count,
        });
    }
    catch (error) {
        console.error("Webhook error:", error);
        return server_1.NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
