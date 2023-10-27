'use client';
import Image from 'next/image';
import Link from 'next/link';
import Rating from '../Rating';
import { getReviewsForWine } from '@/sanity/sanity-utils/review-utils';
import { getAverageRating } from '@/lib/utils/helperFunctions';
import { use, useEffect, useState } from 'react';
import user from '@/sanity/schemas/user';
interface WineProps {
  wine: Wine;
}
const WineListCard = ({
  wine: { name, imageUrl, country, region, smell, taste, body, slug, price },
}: WineProps) => {
  const [reviews, setReviews] = useState([] as Review[]);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsFetched = await getReviewsForWine(slug);
      setReviews(reviewsFetched);
    };
    fetchReviews();
  }, []);

  // const reviews = await getReviewsForWine(wine.slug);
  const averageRating = getAverageRating(reviews);
  return (
    <Link href={`/wines/${slug}`}>
      <div className='h-52 grid grid-cols-2 items-center bg-grey-highlight rounded-3xl p-2 shadow-[4px_4px_4px_rgba(0,0,0,0.30)]'>
        <div className='w-28 h-44 relative'>
          <Image
            className='rounded-3xl'
            alt='Image of a wine bottle'
            src={`${imageUrl}`}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='text-xs md:text-base grid grid-cols-1 gap-4'>
          <h1 className='text-base md:text-xl'>{name}</h1>
          <div className='grid grid-cols-2'>
            <div className='font-medium'>
              <p>Taste</p>
              <p>Aroma</p>
              <p>Body</p>
            </div>
            <div>
              <p>{taste}</p>
              <p>{smell}</p>
              <p>{body}</p>
            </div>
          </div>
          <div className='grid grid-cols-2'>
            <div className='place-self-start self-end'>
              <Rating rating={averageRating} />
            </div>
            {price && (
              <div className='place-self-end'>
                <p className='text-wine-red font-bold'>{price} NOK</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default WineListCard;
