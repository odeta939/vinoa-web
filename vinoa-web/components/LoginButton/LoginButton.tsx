'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function LoginButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <button onClick={() => signOut()}>{session.user.name} Logout</button>
    );
  }
  return <button onClick={() => signIn()}>Login</button>;
}
