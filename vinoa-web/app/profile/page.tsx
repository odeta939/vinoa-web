import ProfileLogo from '@/lib/assets/ProfileLogo';
import WineCard from '@/components/WineCard';
import { BsPencilFill } from 'react-icons/bs';
import { getUser } from '@/sanity/sanity-utils';

const Profile = async () => {
  const user = await getUser('testuser');
  console.log(user.wines);
  console.log(JSON.stringify(user));
  return (
    <div className='flex flex-col items-center pt-12 h-full gap-10'>
      <ProfileLogo />
      <div className='flex flex-row gap-3'>
        <p>{user.name}</p>|
        <BsPencilFill />
      </div>

      <div className='bg-grey-highlight m-14 grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1'>
        {user.wines.map((wine) => (
          <WineCard key={wine._id} wine={wine} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
