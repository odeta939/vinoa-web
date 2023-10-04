'use client';
import Logo from '@/lib/assets/Logo';
import ProfileLogo from '@/lib/assets/ProfileLogo';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className='p-4'>
      <div className='flex place-items-center justify-between text-xl'>
        <div className='flex items-center'>
          <Link href={'/'}>
            <Logo />
          </Link>
        </div>
        <ul className=' flex justify-end items-center gap-6 '>
          <li className='hover:underline underline-offset-4'>
            <Link href={'/'}>Home</Link>
          </li>
          <li className='hover:underline underline-offset-4'>
            <Link href='/monthsWine'>Month&#39;s wine</Link>
          </li>
          <li className='hover:underline underline-offset-4'>
            <Link href='/wines'>Wines</Link>
          </li>
          <li>
            <Link href='/profile'>
              <ProfileLogo />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
