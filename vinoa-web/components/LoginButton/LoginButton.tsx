'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useUserStore } from '@/store/store';
import { useEffect } from 'react';

export default function LoginButton() {
  const { data: session } = useSession();
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (session) {
      const { name, id } = session.user as SessionUser;
      setUser({ name: name, id: id, session: true });
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

  return (
    <button
      onClick={() => {
        signOut();
        setUser({ name: '', id: '', session: false });
      }}
    >
      Sign out
    </button>
  );
}
