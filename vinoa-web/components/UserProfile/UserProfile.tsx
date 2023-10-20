'use client';
import ProfileLogo from '@/lib/assets/ProfileLogo';
import { BsPencilFill } from 'react-icons/bs';
import WineCard from '../WineListCard';
import { useEffect } from 'react';
import { useSanityUserStore, useUserStore } from '@/store/store';

const UserProfile = () => {
  const globalUser = useUserStore((state) => state.user);
  const user = useSanityUserStore((state) => state.sanityUser);
  const setUser = useSanityUserStore((state) => state.setSanityUser);

  useEffect(() => {
    const fetchData = async () => {
      const userToPost = {
        name: globalUser.name,
        id: globalUser.id,
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
      setUser(user);
    };
    fetchData();
  }, []);

  return (
    <div className='flex flex-col items-center pt-12 h-full gap-10'>
      <ProfileLogo />
      <div className='flex flex-row gap-3'>
        <p>{user.name}</p>|
        <BsPencilFill />
      </div>

      <div className='bg-grey-highlight m-14 grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1'>
        {user.wines &&
          user.wines.map((wine) => <WineCard key={wine._id} wine={wine} />)}
        {!user.wines ||
          (user.wines.length == 0 && (
            <p className='text-violet-darker'>
              Here you will be able to see wines you rate in the future
            </p>
          ))}
      </div>
    </div>
  );
};
export default UserProfile;
