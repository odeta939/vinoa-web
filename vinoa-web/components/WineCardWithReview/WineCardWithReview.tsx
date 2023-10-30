import Link from 'next/link';
import Image from 'next/image';
import Rating from '../Rating';
import { useEffect, useState } from 'react';
import { getReviewsForWine } from '@/sanity/sanity-utils/review-utils';
import { getAverageRating } from '@/lib/utils/helperFunctions';

interface Props {
  wine: Wine;
}
const WineCardWithReview = ({
  wine: { name, imageUrl, country, region, smell, taste, body, slug, price },
}: Props) => {
  const [reviews, setReviews] = useState([] as Review[]);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsFetched = await getReviewsForWine(slug);
      setReviews(reviewsFetched);
    };
    fetchReviews();
  }, []);

  const averageRating = getAverageRating(reviews);
  return (
    <Link className=' w-full md:w-auto mb-6' href={`/wines/${slug}`}>
      <div className='h-56 lg:h-60 md:w-[28rem] mb-6 grid grid-cols-2 bg-grey-highlight rounded-xl p-2 shadow-[4px_4px_4px_rgba(0,0.30,0.30,0.30)]'>
        <div className='w-28 h-[13rem] lg:h-56 lg:w-36 relative'>
          <Image
            className='rounded-xl'
            alt='Image of a wine bottle'
            src={`${imageUrl}`}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='text-xs md:text-base justify-between flex flex-col gap-4'>
          <h1 className='text-sm md:text-xl'>{name}</h1>
          <div className='grid grid-cols-2 text-xs uppercase'>
            <p className='font-semibold'>Taste</p> <p>{taste}</p>
            <p className='font-semibold'>Aroma</p> <p>{smell}</p>
            <p className='font-semibold'>Body</p> <p>{body}</p>
          </div>
          <div className='grid grid-cols-2 '>
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

export default WineCardWithReview;
