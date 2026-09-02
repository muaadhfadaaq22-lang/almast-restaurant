// app/api/reservation/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, date, time, guests } = body;

    // رابط Google Sheets Web App (يجب عليك إعداده)
    const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!GOOGLE_SHEETS_URL) {
      console.error("Missing GOOGLE_SHEETS_WEBHOOK_URL");
      // للتجربة المحلية: فقط نطبع في الكونسول
      console.log("Reservation:", { name, phone, date, time, guests });
      return NextResponse.json({ success: true, message: "Logged locally" });
    }

    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name,
        phone,
        date,
        time,
        guests,
      }),
    });

    if (!response.ok) throw new Error("Sheets error");

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit reservation" }, { status: 500 });
  }
}