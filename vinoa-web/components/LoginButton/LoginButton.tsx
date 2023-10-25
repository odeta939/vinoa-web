'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useUserStore } from '@/store/store';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function LoginButton() {
  const { data: session } = useSession();
  const setUser = useUserStore((state) => state.setUser);
  const path = usePathname();

  useEffect(() => {
    if (session) {
      const { name, id } = session.user as SessionUser;
      setUser({ name: name, id: id, session: true });
    }
  }, [session]);

  if (!session) {
    return (
      <button
        className={`${path == '/profile' && 'ring-2 ring-black rounded-md'} ${
          path != '/profile' && 'hover:underline-offset-4 hover:underline'
        } bg-grey-highlight rounded-md `}
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
      className={`rounded-md bg-grey-highlight py-2 hover:underline-offset-4 hover:underline`}
      onClick={() => {
        signOut();
        setUser({ name: '', id: '', session: false });
      }}
    >
      Sign out
    </button>
  );
}
