'use client';
import { getAverageRating } from '@/lib/utils/helperFunctions';
import Rating from '../Rating';
import Image from 'next/image';
import { getReviewsForWine } from '@/sanity/sanity-utils/review-utils';

interface Props {
  wine: Wine;
}

const WineInformationSection = async ({ wine }: Props) => {
  const reviews = await getReviewsForWine(wine.slug);
  const averageRating = getAverageRating(reviews);
  return (
    <div>
      <h2 className='text-xl text-[#19082E] md:hidden'>{wine.name}</h2>
      <div className='grid grid-cols-2 mt-4'>
        <div className='flex flex-col text-sm justify-between '>
          <h2 className='text-xl text-[#19082E] hidden md:text-4xl md:block pb-4'>
            {wine.name}
          </h2>
          <div className='text-xs mt-4 hidden md:block md:text-base pb-4'>
            <p>{wine.description}</p>
          </div>
          <div className='flex flex-row gap-2 '>
            <div className='grid grid-flow-row gap-2 font-semibold'>
              <p>Taste</p>
              <p>Aroma</p>
              <p>Body</p>
            </div>
            <div className='grid grid-flow-row gap-2'>
              <p>{wine.taste}</p>
              <p>{wine.smell}</p>
              <p>{wine.body}</p>
            </div>
          </div>
          <Rating label={`Average rating:`} rating={averageRating} />
        </div>

        <div className='mr-10 w-24 h-38 md:w-56 md:h-76 mx-auto relative'>
          <Image
            className='rounded-3xl'
            alt='Image of a wine bottle'
            src={`${wine.imageUrl}`}
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
      <div className='text-xs mt-4 md:hidden'>
        <p>{wine.description}</p>
      </div>
    </div>
  );
};

export default WineInformationSection;
