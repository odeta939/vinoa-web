'use client';
import ProfileLogo from '@/lib/assets/ProfileLogo';
import { BsPencilFill } from 'react-icons/bs';
import WineCard from '../WineCard';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import user from '@/sanity/schemas/user';

const UserProfile = () => {
  const { data: session }: any = useSession();

  const [userData, setData] = useState<User>({} as User);

  useEffect(() => {
    const fetchData = async () => {
      if (!session) return;
      const userToPost = {
        name: session.user.name,
        id: session.user.id,
        slug: session.user.name.toLowerCase().replace(/\s/g, '-'),
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
      setData(user);
    };
    fetchData();
  }, [session]);

  if (session && session.user) {
    return (
      <div className='flex flex-col items-center pt-12 h-full gap-10'>
        <ProfileLogo />
        <div className='flex flex-row gap-3'>
          <p>{userData.name}</p>|
          <BsPencilFill />
          <button onClick={() => signOut()}> Sign out</button>
        </div>

        <div className='bg-grey-highlight m-14 grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1'>
          {userData.wines &&
            userData.wines.map((wine) => (
              <WineCard key={wine._id} wine={wine} />
            ))}
          {!userData.wines ||
            (userData.wines.length == 0 && (
              <p className='text-violet-darker'>
                Here you will be able to see wines you rate in the future
              </p>
            ))}
        </div>
      </div>
    );
  }
};
export default UserProfile;
