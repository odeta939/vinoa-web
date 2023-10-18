'use client';
import Logo from '@/lib/assets/Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const path = usePathname();
  return (
    <nav className='p-4'>
      <div className='flex place-items-center justify-between text-l'>
        <div className='flex items-center'>
          <Link href={'/'}>
            <Logo color='#800020' />
          </Link>
        </div>
        <ul className='flex justify-end items-center gap-6 '>
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
          <li
            className={`${
              path == '/profile' && 'ring-2 ring-black rounded-md'
            } ${
              path != '/profile' && 'hover:underline-offset-4 hover:underline'
            } `}
          >
            <Link href='/profile'>Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
