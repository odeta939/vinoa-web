'use client';
import Wine from '@/lib/assets/Wine';
interface WineButtonProps {
  handleClick: () => void;
}
const WineButton = () => {
  return (
    <div className='h-auto grow  self-center'>
      <button className='w-64 text-violet-darker bg-gold-highlight flex text-xl justify-around items-center place-self-center py-4'>
        Todays wine <Wine />
      </button>
    </div>
  );
};
export default WineButton;
