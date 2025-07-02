// /api/mobile-payments/airtel/webhook/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    console.log("📥 Incoming Airtel webhook payload:", payload);
    const airtelTxnId = payload?.data?.transaction?.id;
    const newStatus = payload?.data?.transaction?.status?.toUpperCase();

    if (!airtelTxnId || !newStatus) {
      return NextResponse.json(
        { error: "Missing transaction ID or status" },
        { status: 400 }
      );
    }

    const updated = await prisma.mobilepayments.updateMany({
      where: { airtelTxnId },
      data: { status: newStatus },
    });

    if (updated.count === 0) {
      return NextResponse.json(
        { warning: "No matching payment found" },
        { status: 202 }
      );
    }

    return NextResponse.json({ message: "Status updated", newStatus });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
