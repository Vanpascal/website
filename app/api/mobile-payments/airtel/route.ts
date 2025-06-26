import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { provider, phone, amount, purpose } = body;

    console.log("📥 Incoming request body:", body);

    const localTxnId = uuidv4();
    console.log("🆕 Generated localTxnId:", localTxnId);

    // Step 1: Get Airtel token
    console.log("🔐 Requesting Airtel access token...");
    const tokenRes = await fetch(
      "https://openapiuat.airtel.africa/auth/oauth2/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        body: JSON.stringify({
          client_id: process.env.AIRTEL_CLIENT_ID!,
          client_secret: process.env.AIRTEL_CLIENT_SECRET!,
          grant_type: "client_credentials",
        }),
      }
    );

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
      reference: purpose ?? "Donation",
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

    const payRes = await fetch(
      "https://openapiuat.airtel.africa/merchant/v1/payments/",
      {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
          "X-Country": "TZ",
          "X-Currency": "TZS",
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(airtelPayload),
      }
    );

    if (!payRes.ok) {
      const payError = await payRes.text();
      console.error("❌ Payment initiation failed:", payError);
      throw new Error("Payment initiation failed");
    }

    const payData = await payRes.json();
    const airtelTxnId = payData?.data?.transaction?.id ?? null;
    const status = payData?.data?.transaction?.status ?? "PENDING";

    console.log("✅ Airtel payment response:", {
      airtelTxnId,
      status,
    });

    // Step 3: Save payment record
    const payment = await prisma.payments.create({
      data: {
        method: "mobile",
        amount: Number(amount),
        purpose,
        mobilePayment: {
          create: {
            provider,
            phone,
            localTxnId,
            airtelTxnId,
            status,
          },
        },
      },
      include: {
        mobilePayment: true,
      },
    });

    console.log("💾 Saved payment to DB:", payment);

    return NextResponse.json({
      message: "Payment initiated successfully",
      payment,
    });
  } catch (error) {
    console.error("💥 Payment processing error:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Something went wrong" },
      { status: 500 }
    );
  }
}
