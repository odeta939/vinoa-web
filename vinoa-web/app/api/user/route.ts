import { createUser, getUser } from '@/sanity/sanity-utils/user-utils';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const response: User = await req.json();
  console.log(response, 'response');
  let user = await getUser(response.uid as string);
  if (!user) {
    user = await createUser(response);
    console.log(user, 'user after creation');
  }
  return NextResponse.json({ message: 'ok', user: user });
}
