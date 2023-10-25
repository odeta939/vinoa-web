'use client';
import { getReviewsForWine } from '@/sanity/sanity-utils/review-utils';
import Image from 'next/image';
import Rating from '../Rating';
import { useEffect, useState } from 'react';
import Avatar from '../Avatar';
import { useUserStore } from '@/store/store';

interface Props {
  slug: string;
}

const PreviousReviews = ({ slug }: Props) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const globalUser = useUserStore((state) => state.user);

  useEffect(() => {
    const getReviews = async () => {
      const reviews = await getReviewsForWine(slug);
      setReviews(reviews);
    };
    getReviews();
  }, []);
  return (
    <div className=' divide-y-2 mt-10'>
      {reviews.map((review, idx) => {
        return (
          <div className='pb-4 pt-2' key={idx}>
            <div className='flex flex-row'>
              <Avatar name={review.userName} />
              <div className='flex flex-col justify-between'>
                <p className='text-violet-darker'>{review.comment}</p>
                <Rating rating={review.rating} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PreviousReviews;
