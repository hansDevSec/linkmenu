import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getClient } from "@/lib/mongodb";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = typeof body?.id === "string" ? body.id : "";

  // 등록된 링크만 집계한다.
  if (!links.some((link) => link.id === id)) {
    return NextResponse.json({ error: "unknown link" }, { status: 400 });
  }

  try {
    const client = await getClient();
    await client
      .db()
      .collection<{ _id: string; count: number }>("clicks")
      .updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("click 기록 실패:", error);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
