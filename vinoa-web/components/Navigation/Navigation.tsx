'use client';
import Logo from '@/lib/assets/Logo';
import ProfileLogo from '@/lib/assets/ProfileLogo';

const Navigation = () => {
  return (
    <nav className='p-4'>
      <div className='flex place-items-center justify-between'>
        <div className='flex items-center'>
          <Logo />
          <h1 className='text-[50px]'>Wine Tastery</h1>
        </div>
        <ul className=' flex justify-end items-center gap-6 '>
          <li className='hover:underline underline-offset-4'>
            <a href='/'>Home</a>
          </li>
          <li className='hover:underline underline-offset-4'>
            <a href='#'>About</a>
          </li>
          <li className='hover:underline underline-offset-4'>
            <a href='#'>Todays tasting</a>
          </li>
          <li className='hover:underline underline-offset-4'>
            <a href='/wines'>Wines</a>
          </li>
          <li>
            <a href='/profile'>
              <ProfileLogo />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
