'use client';

interface WineCardProps {
  wineName: string;
}

const WineCard = ({wineName} : WineCardProps) => {
  
  return (
    
    <div className='bg-red-300 p-14'>{wineName}</div>
  );
};
export default WineCard;
