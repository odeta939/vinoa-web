import { createUser, getUser } from '@/sanity/sanity-utils/user-utils';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const response: User = await req.json();
  let user = await getUser(response.uid as string);
  if (!user) {
    user = await createUser(response);
  }
  return NextResponse.json({ message: 'ok', user: user });
}
