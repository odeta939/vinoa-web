'use client';
import { useState } from 'react';
import Rating from '../Rating';
import Avatar from '../Avatar';

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
      <div className='flex flex-row justify-between px-5 lg:px-20'>
        <Avatar name='John Doe' />
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
