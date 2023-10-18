'use client';
import ProfileLogo from '@/lib/assets/ProfileLogo';
import { BsPencilFill } from 'react-icons/bs';
import WineCard from '../WineCard';
import { useEffect } from 'react';
import { useSanityUserStore, useUserStore } from '@/store/store';
import LoginButton from '../LoginButton';

const UserProfile = () => {
  const globalUser = useUserStore((state) => state.user);
  const user = useSanityUserStore((state) => state.sanityUser);
  const setUser = useSanityUserStore((state) => state.setSanityUser);

  useEffect(() => {
    const fetchData = async () => {
      console.log(globalUser, 'global user');
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
      console.log(userToPost, 'user to post');
      let { user } = await response.json();
      console.log(user, 'user');
      setUser(user);
    };
    fetchData();
  }, [globalUser]);
  if (user.name.length != 0) {
    return (
      <div className='flex flex-col items-center pt-12 h-full gap-10'>
        <ProfileLogo />
        <div className='flex flex-row gap-3'>
          <p>{user.name}</p>|
          <LoginButton />
        </div>
        <div className='text-center m-14 grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1'>
          {user.wines &&
            user.wines.map((wine) => <WineCard key={wine._id} wine={wine} />)}
          {!user.wines ||
            (user.wines.length === 0 && (
              <p className=''>Wines you tasted will be shown here</p>
            ))}
        </div>
      </div>
    );
  } else {
    return (
      <>
        <LoginButton />
      </>
    );
  }
};
export default UserProfile;
