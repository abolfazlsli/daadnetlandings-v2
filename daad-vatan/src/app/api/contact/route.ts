import { NextResponse } from "next/server";

// Placeholder endpoint — swap the body for a call to the real backend.
export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { fullName?: string; phone?: string; message?: string }
    | null;

  if (!body?.fullName?.trim() || !body.phone?.trim() || !body.message?.trim()) {
    return NextResponse.json({ ok: false, message: "لطفاً همه فیلدها را تکمیل کنید" }, { status: 400 });
  }

  return NextResponse.json({ ok: true, message: "پیام شما با موفقیت ثبت شد" });
}
