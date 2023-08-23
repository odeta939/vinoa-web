'use client';
import Logo from '@/lib/assets/Logo';
import Profile from '@/lib/assets/Profile';

const Navigation = () => {
  return (
    <nav className='bg-[#013927]  p-4'>
      <div className='flex place-items-center justify-between'>
        <div className='flex items-center'>
          <Logo />
          <h1 className='text-[#BC9161] text-[50px]'>Wine Tastery</h1>
        </div>
        <ul className=' flex justify-end items-center gap-6 '>
          <li className='hover:underline underline-offset-4'>
            <a href='#'>Home</a>
          </li>
          <li className='hover:underline underline-offset-4'>
            <a href='#'>About</a>
          </li>
          <li className='hover:underline underline-offset-4'>
            <a href='#'>Todays tasting</a>
          </li>
          <li className='hover:underline underline-offset-4'>
            <a href='#'>Wine rating</a>
          </li>
          <li>
            <Profile />
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
