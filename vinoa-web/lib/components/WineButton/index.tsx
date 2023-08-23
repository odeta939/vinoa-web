import Wine from '@/lib/assets/Wine';
const WineButton = () => {
  return (
    <div className='flex justify-center pt-52'>
      <button className='bg-main-gold w-64 flex text-xl justify-around items-center py-4'>
        Today's wine <Wine />
      </button>
    </div>
  );
};
export default WineButton;
