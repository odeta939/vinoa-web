import { createComment } from "@/sanity/sanity-utils";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
  const response = await req.json();
  console.log(response);
  await createComment();
 
  return NextResponse.json({ message: 'ok' });
}