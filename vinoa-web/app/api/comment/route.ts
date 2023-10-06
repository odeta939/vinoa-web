import { createComment } from "@/sanity/sanity-utils";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
  const response : Review = await req.json();
  await createComment(response);
  return NextResponse.json({ message: 'ok' });
}