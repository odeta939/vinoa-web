import ProfileLogo from '@/lib/assets/ProfileLogo';

interface Props {
  name: string;
}

const Avatar = ({ name }: Props) => {
  return (
    <div className='flex flex-col items-center pr-4 md:pr-8'>
      <div className=' rounded-full'>
        <ProfileLogo />
      </div>
      <div className='text-xs'>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Avatar;
