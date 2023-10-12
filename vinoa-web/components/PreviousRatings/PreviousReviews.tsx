'use client';
import { getReviewsForWine } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Rating from '../Rating';
import { useEffect, useState } from 'react';

interface Props {
  slug: string;
}

const PreviousReviews = ({ slug }: Props) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  useEffect(() => {
    const getReviews = async () => {
      const reviews = await getReviewsForWine(slug);
      setReviews(reviews);
      console.log('reviews', reviews);
    };
    getReviews();
  }, []);
  // const reviews: Array<Review> = await getReviewsForWine(slug);
  return (
    <>
      {reviews.map((review, idx) => {
        return (
          <div className='chat chat-start' key={idx}>
            <div className='chat-image avatar'>
              <div className='w-10 rounded-full'>
                <Image
                  height={40}
                  width={40}
                  alt='Progile picture'
                  src='https://images.unsplash.com/photo-1610631787813-9eeb1a2386cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
                />
              </div>
            </div>
            <div className='chat-header'>Anakin</div>

            <div className='chat-bubble bg-grey-highlight'>
              <p className='text-violet-darker'>{review.comment}</p>
            </div>
            <div className='chat-footer'>
              <Rating rating={review.rating} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PreviousReviews;
