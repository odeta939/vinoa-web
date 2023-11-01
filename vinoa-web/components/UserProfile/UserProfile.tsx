'use client';
import ProfileLogo from '@/lib/assets/ProfileLogo';
import WineCard from '../WineListCard';
import { useEffect } from 'react';
import { useSanityUserStore, useUserStore } from '@/store/store';
import LoginButton from '../LoginButton';
import WineCardWithReview from '../WineCardWithReview';

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
        <div className='flex flex-col lg:flex-row gap-3 place-self-center mb-12'>
          <p className='p-4'>{sanityUser.name}</p>
          <LoginButton />
        </div>

        <div className='mx-6 flex flex-col items-center lg:grid lg:grid-cols-2 lg:justify-items-center gap-4'>
          {sanityUser.wines &&
            sanityUser.wines.map((wine) => (
              <WineCardWithReview wine={wine} key={wine._id} />
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
