import ProfileLogo from '@/lib/assets/ProfileLogo';
import WineCard from '@/lib/components/WineCard';
import { BsPencilFill } from 'react-icons/bs';

const Profile = () => {
  return (
    <div className='flex flex-col items-center pt-12 h-full gap-10'>
      <ProfileLogo />
      <div className='flex flex-row gap-3'>
        <p>Odeta Penikaite</p>|
        <BsPencilFill />
      </div>

      <div className='bg-grey-highlight p-14 grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1'>
        <WineCard
          wineName='Barbera'
          country='Italy'
          region='Piemonte'
          color='red'
          smell='fruity'
          taste='red berries'
        ></WineCard>

        <WineCard
          wineName='Barbera'
          country='Italy'
          region='Piemonte'
          color='red'
          smell='fruity'
          taste='red berries'
        ></WineCard>

        <WineCard
          wineName='Barbera'
          country='Italy'
          region='Piemonte'
          color='red'
          smell='fruity'
          taste='red berries'
        ></WineCard>

        <WineCard
          wineName='Barbera'
          country='Italy'
          region='Piemonte'
          color='red'
          smell='fruity'
          taste='red berries'
        ></WineCard>
      </div>
    </div>
  );
};

export default Profile;
