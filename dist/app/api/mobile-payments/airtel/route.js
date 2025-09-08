"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
const server_1 = require("next/server");
const uuid_1 = require("uuid");
const prisma_1 = require("@/lib/prisma");
async function POST(req) {
    var _a, _b, _c, _d, _e, _f;
    try {
        const body = await req.json();
        const { provider, phone, amount, purpose } = body;
        console.log("📥 Incoming request body:", body);
        if (isNaN(Number(amount))) {
            throw new Error("Invalid amount");
        }
        const localTxnId = (0, uuid_1.v4)();
        console.log("🆕 Generated localTxnId:", localTxnId);
        // Step 1: Get Airtel token
        const tokenRes = await fetch("https://openapi.airtel.africa/auth/oauth2/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "*/*",
            },
            body: JSON.stringify({
                client_id: process.env.AIRTEL_CLIENT_ID,
                client_secret: process.env.AIRTEL_CLIENT_SECRET,
                grant_type: "client_credentials",
            }),
        });
        if (!tokenRes.ok) {
            const errorText = await tokenRes.text();
            console.error("❌ Failed to fetch token:", errorText);
            throw new Error("Failed to get Airtel token");
        }
        const tokenData = await tokenRes.json();
        const access_token = tokenData.access_token;
        console.log("✅ Received Airtel token.");
        // Step 2: Initiate payment
        const airtelPayload = {
            reference: purpose !== null && purpose !== void 0 ? purpose : "Donation",
            subscriber: {
                country: "TZ",
                currency: "TZS",
                msisdn: phone,
            },
            transaction: {
                id: localTxnId,
                amount: Number(amount),
                country: "TZ",
                currency: "TZS",
            },
        };
        console.log("📤 Sending payment request to Airtel:", airtelPayload);
        const payRes = await fetch("https://openapi.airtel.africa/merchant/v1/payments/", {
            method: "POST",
            headers: {
                Accept: "*/*",
                "Content-Type": "application/json",
                "X-Country": "TZ",
                "X-Currency": "TZS",
                Authorization: `Bearer ${access_token}`,
            },
            body: JSON.stringify(airtelPayload),
        });
        if (!payRes.ok) {
            const payError = await payRes.text();
            console.error("❌ Payment initiation failed:", payError);
            throw new Error("Payment initiation failed");
        }
        const payData = await payRes.json();
        const airtelTxnId = (_c = (_b = (_a = payData === null || payData === void 0 ? void 0 : payData.data) === null || _a === void 0 ? void 0 : _a.transaction) === null || _b === void 0 ? void 0 : _b.id) !== null && _c !== void 0 ? _c : null;
        const status = (_f = (_e = (_d = payData === null || payData === void 0 ? void 0 : payData.data) === null || _d === void 0 ? void 0 : _d.transaction) === null || _e === void 0 ? void 0 : _e.status) !== null && _f !== void 0 ? _f : "PENDING";
        console.log("✅ Airtel payment response:", { airtelTxnId, status });
        // Step 3: Save payment record
        const payment = await prisma_1.prisma.payments.create({
            data: {
                method: "mobile",
                amount: Number(amount),
                purpose,
                mobilepayments: {
                    create: {
                        provider,
                        phone,
                        localTxnId,
                        airtelTxnId,
                        status,
                        updatedAt: new Date(),
                    },
                },
            },
            include: {
                mobilepayments: true,
            },
        });
        console.log("💾 Saved payment to DB:", payment);
        return server_1.NextResponse.json({
            message: "Payment initiated successfully",
            airtelTxnId, // ✅ critical fix for polling
            payment,
        });
    }
    catch (error) {
        console.error("💥 Payment processing error:", error);
        return server_1.NextResponse.json({
            error: error instanceof Error
                ? error.message
                : "Something went wrong during payment processing",
        }, { status: 500 });
    }
}
