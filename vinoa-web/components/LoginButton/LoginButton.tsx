'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useUserStore } from '@/store/store';
import { useEffect } from 'react';

export default function LoginButton() {
  const { data: session } = useSession();
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (session) {
      const { name, id } = session.user as SessionUser;
      setUser({ name: name, id: id });
    } else {
      setUser({ name: '', id: '' });
    }
  }, [session]);

  if (!session) {
    return (
      <button
        onClick={() => {
          signIn();
        }}
      >
        Sign in
      </button>
    );
  }

  return <button onClick={() => signOut()}>{user.name} Sign out</button>;
}
