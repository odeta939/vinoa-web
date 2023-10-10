import { createUser, getUser } from "@/sanity/sanity-utils";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
  const response : User = await req.json();
  let user = await getUser(response.id as string);
  if(!user){
   user = await createUser(response);
  }
  return NextResponse.json({ message: 'ok', user: user });
}

