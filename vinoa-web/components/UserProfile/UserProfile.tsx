'use client';
import ProfileLogo from '@/lib/assets/ProfileLogo';
import WineCard from '../WineCard';
import { useEffect } from 'react';
import { useSanityUserStore, useUserStore } from '@/store/store';
import LoginButton from '../LoginButton';
import Logo from '@/lib/assets/Logo';
import Link from 'next/link';

const UserProfile = () => {
  const globalUser = useUserStore((state) => state.user);
  const sanityUser = useSanityUserStore((state) => state.sanityUser);
  const setSanityUser = useSanityUserStore((state) => state.setSanityUser);

  useEffect(() => {
    const fetchData = async () => {
      const userToPost = {
        name: globalUser.name,
        uid: globalUser.id,
        slug: globalUser.name.toLowerCase().replace(/\s/g, '-'),
        wines: [],
      };
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userToPost),
      });
      let { user } = await response.json();
      setSanityUser(user);
    };
    fetchData();
  }, [globalUser.session]);

  console.log(sanityUser, 'sanityUser');
  if (sanityUser && sanityUser.name != '') {
    return (
      <div className='flex flex-col md:pt-4'>
        <div className='md:hidden grid justify-center'>
          <Link href={'/'}>
            <Logo color='#800020' />
          </Link>
        </div>
        <div className='place-self-center'>
          <ProfileLogo />
        </div>
        <div className='flex flex-col lg:flex-row lg:ring gap-3 place-self-center'>
          <p className='p-4'>{sanityUser.name}</p>
          <LoginButton />
        </div>

        <div className='mx-8 grid grid-flow-row  md:grid-cols-2 lg:grid-cols-3'>
          {sanityUser.wines &&
            sanityUser.wines.map((wine) => (
              <WineCard key={wine._id} wine={wine} />
            ))}
          {!sanityUser.wines ||
            (sanityUser.wines.length === 0 && (
              <p>Wines you tasted will be shown here</p>
            ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className='grid justify-center pt-32'>
        <LoginButton />
      </div>
    );
  }
};
export default UserProfile;
