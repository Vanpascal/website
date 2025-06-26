import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    // Extract Airtel transaction ID and status from payload
    const airtelTxnId = payload?.data?.transaction?.id;
    const newStatusRaw = payload?.data?.transaction?.status;

    if (!airtelTxnId || !newStatusRaw) {
      return NextResponse.json(
        { error: "Missing transaction ID or status" },
        { status: 400 }
      );
    }

    const newStatus = newStatusRaw.toUpperCase();

    // Update matching payment status in DB
    const updated = await prisma.mobilePayments.updateMany({
      where: { airtelTxnId },
      data: { status: newStatus },
    });

    if (updated.count === 0) {
      // No payment found matching Airtel transaction ID
      return NextResponse.json(
        { warning: "No matching payment found for this transaction ID" },
        { status: 202 }
      );
    }

    return NextResponse.json({
      message: "Payment status updated successfully",
      newStatus,
    });
  } catch (error) {
    console.error("Webhook update error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
