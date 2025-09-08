"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = GET;
// /api/mobile-payments/status/route.ts
const prisma_1 = require("@/lib/prisma");
const server_1 = require("next/server");
async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const airtelTxnId = searchParams.get("transactionId");
        if (!airtelTxnId) {
            return server_1.NextResponse.json({ error: "Missing transactionId" }, { status: 400 });
        }
        const payment = await prisma_1.prisma.mobilepayments.findFirst({
            where: { airtelTxnId },
            select: { status: true },
        });
        if (!payment) {
            return server_1.NextResponse.json({ status: "NOT_FOUND" });
        }
        return server_1.NextResponse.json({ status: payment.status });
    }
    catch (error) {
        console.error("Status check error:", error);
        return server_1.NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
