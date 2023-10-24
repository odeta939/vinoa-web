interface Props {
  name: string;
}

const Avatar = ({ name }: Props) => {
  return (
    <div className='flex flex-col items-center pr-4 md:pr-8'>
      <div className=' rounded-full'>
        <img
          className='rounded-full w-10 h-10 md:w-20 md:h-20 '
          src='https://images.unsplash.com/photo-1610631787813-9eeb1a2386cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
        />
      </div>
      <div className='text-xs'>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Avatar;
