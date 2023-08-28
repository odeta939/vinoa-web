import Wine from '@/lib/assets/Wine';
const WineButton = () => {
  return (
    <div className='h-auto grow  self-center'>
      <button className='w-64 text-violet-darker flex text-xl justify-around items-center place-self-center py-4'>
        Todays wine <Wine />
      </button>
    </div>
  );
};
export default WineButton;
