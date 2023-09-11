'use client';
import Image from 'next/image';

interface WineCardProps {
  wineName: string;
  country: string;
  region: string;
  color: string;
  smell: string;
  taste: string;
}

const WineCard = ({
  wineName,
  country,
  region,
  color,
  smell,
  taste,
}: WineCardProps) => {
  return (
    <div className='bg-violet-dark m-4 p-4 flex flex-row'>
      <div>
        <Image
          width={160}
          height={160}
          alt='Image of a wine bottle'
          src='https://images.unsplash.com/photo-1610631787813-9eeb1a2386cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
        />
        <p>Rating</p>
        <p>1/5</p>
      </div>
      <div className='px-5'>
        <h1 className='text-2xl pb-4'>{wineName}</h1>
        <div className='flex flex-col grow h-auto'>
          <p>Country: {country}</p>
          <p>Region: {region}</p>
          <p>Color: {color}</p>
          <p>Smell: {smell}</p>
          <p>Taste: {taste}</p>
        </div>
      </div>
    </div>
  );
};
export default WineCard;
