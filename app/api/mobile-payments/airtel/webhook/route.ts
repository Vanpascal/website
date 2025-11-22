import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { broadcastPaymentStatus } from "@/lib/server";

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    // Log the incoming webhook payload from Airtel
    console.log(
      "📥 Incoming Airtel webhook payload:",
      JSON.stringify(payload, null, 2)
    );

    const txnId = payload.transaction?.id;
    const code = payload.transaction?.status_code;

    if (!txnId || !code) {
      return NextResponse.json(
        { error: "Missing transaction id or status code" },
        { status: 400 }
      );
    }

    const statusMap: Record<string, string> = {
      TS: "SUCCESSFUL",
      TF: "FAILED",
    };
    const status = statusMap[code] || "PENDING";

    // Update payment in DB
    const updatedPayment = await prisma.mobilepayments.updateMany({
      where: { localTxnId: txnId },
      data: { status, updatedAt: new Date() },
    });

    // Broadcast to WS clients
    broadcastPaymentStatus(txnId, status);

    return NextResponse.json({
      message: "Status updated",
      status,
      updatedCount: updatedPayment.count,
    });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
