'use client';
import { useState } from 'react';
import Rating from '../Rating';

interface Props {
  wineId: string;
}
const ReviewToPost = ({ wineId }: Props) => {
  console.log('hi from ReviewToPost');
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

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setReview(value);
  };
  return (
    <div className='chat chat-end'>
      {/* Avatar image */}
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img src='https://images.unsplash.com/photo-1610631787813-9eeb1a2386cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80' />
        </div>
      </div>
      <div className='chat-header mb-2'>{'USER NAME'}</div>
      <input
        value={review}
        onChange={(e) => handleOnChange(e)}
        className='chat-bubble text-violet-darker bg-grey-highlight focus:outline-none focus:ring focus:ring-violet-300'
        type='text'
      />
      <div className='chat-footer flex flex-row gap-2 '>
        <Rating setRating={setRating} rating={rating} />
        <button
          disabled={isDisabled}
          onClick={handleOnClick}
          className={`w-24 mt-2  flex text-l font-semibold justify-around items-center place-self-center py-2
            ${
              isDisabled
                ? 'bg-gold-highlight/40 text-violet-darker/40'
                : 'bg-gold-highlight text-violet-darker '
            }
            `}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewToPost;
