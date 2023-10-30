'use client';
import ProfileLogo from '@/lib/assets/ProfileLogo';
import WineCard from '../WineListCard';
import { useEffect } from 'react';
import { useSanityUserStore, useUserStore } from '@/store/store';
import LoginButton from '../LoginButton';

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

  if (sanityUser && sanityUser.name != '') {
    return (
      <div className='flex flex-col md:pt-4'>
        <div className='place-self-center'>
          <ProfileLogo />
        </div>
        <div className='flex flex-col lg:flex-row gap-3 place-self-center'>
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
  }
};
export default UserProfile;
