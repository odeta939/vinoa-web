'use client';
import { useState } from 'react';
import Rating from '../Rating';

interface Props {
  wineId: string;
}
const ReviewToPost = ({ wineId }: Props) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const isDisabled = rating === 0 || review === '';

  const handleOnClick = async () => {
    let reviewToPost: Review = {
      rating: rating,
      comment: review,
      wineId: wineId,
      userId: '',
    };

    await fetch('/api/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewToPost),
    });
    setReview('');
    setRating(0);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = (e.target as HTMLTextAreaElement).value;
    setReview(value);
  };
  return (
    <div className='flex flex-col'>
      {/* Avatar image */}

      <div className='flex flex-row justify-between px-5'>
        <div className='flex flex-col items-center pr-4 md:pr-8'>
          <div className='w-10 rounded-full'>
            <img
              className='rounded-full w-10 h-10 '
              src='https://images.unsplash.com/photo-1610631787813-9eeb1a2386cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
            />
          </div>
          <div className='text-xs'>
            <p>{'USER HERE'}</p>
          </div>
        </div>
        <div className='flex-grow'>
          <div>
            <textarea
              value={review}
              placeholder='Write a review...'
              onChange={(e) => handleOnChange(e)}
              className='w-full h-20 bg-grey-highlight border hover:border-blue-300  text-xs rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-300'
            />
          </div>

          <div className='flex flex-row justify-between'>
            <Rating setRating={setRating} rating={rating} />
            <button
              disabled={isDisabled}
              onClick={handleOnClick}
              className={` mt-2  flex text-xs md:text-lg p-2 rounded-md font-semibold 
            ${
              isDisabled
                ? 'bg-grey-highlight/40 border text-violet-darker/20'
                : 'bg-grey-highlight border hover:border-blue-300 text-violet-darker '
            }
            `}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewToPost;
