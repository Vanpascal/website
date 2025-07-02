// /api/mobile-payments/status/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const airtelTxnId = searchParams.get("transactionId");

    if (!airtelTxnId) {
      return NextResponse.json(
        { error: "Missing transactionId" },
        { status: 400 }
      );
    }

    const payment = await prisma.mobilepayments.findFirst({
      where: { airtelTxnId },
      select: { status: true },
    });

    if (!payment) {
      return NextResponse.json({ status: "NOT_FOUND" });
    }

    return NextResponse.json({ status: payment.status });
  } catch (error) {
    console.error("Status check error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
