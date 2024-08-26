'use client';
import Logo from '@/lib/assets/Logo';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useUserStore } from '@/store/store';
import LoginButton from '../LoginButton';

const Navigation = () => {
  const path = usePathname();
  const { data: session } = useSession();
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (session) {
      const { name, id } = session.user as SessionUser;
      setUser({ name: name, id: id, session: true });
    }
  }, [session]);
  return (
    <nav className='max-w-screen w-full z-10 fixed bottom-0 md:static md:top-0 p-4 bg-white'>
      <div className='grid md:grid-cols-2  text-l'>
        <div className='md:block items-center hidden'>
          <Link href={'/'}>
            <Logo color='#800020' />
          </Link>
        </div>
        <ul className='grid grid-cols-3 content-center text-center gap-4'>
          <li
            className={`${path == '/' && 'ring-2 ring-black rounded-md'} ${
              path != '/' && 'hover:underline-offset-4 hover:underline'
            }  `}
          >
            <Link href={'/'}>Home</Link>
          </li>
          <li
            className={`${path == '/wines' && 'ring-2 ring-black rounded-md'} ${
              path != '/wines' && 'hover:underline-offset-4 hover:underline'
            } `}
          >
            <Link href='/wines'>Wines</Link>
          </li>
          {!session ? (
            <LoginButton />
          ) : (
            <li
              className={`${
                path == '/profile' && 'ring-2 ring-black rounded-md'
              } ${
                path != '/profile' && 'hover:underline-offset-4 hover:underline'
              } `}
            >
              <Link href='/profile'>Profile</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
