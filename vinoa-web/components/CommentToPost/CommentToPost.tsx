'use client';
import { useState } from 'react';

interface Props {
  wine: Wine;
}
const CommentToPost = ({ wine }: Props) => {
  const [review, setReview] = useState('');

  const handleOnClick = async () => {
    let reviewToPost: Rating = {
      rating: 5,
      review: review,
      wineId: wine._id,
    };
    await fetch('/api/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewToPost),
    });
    setReview('');
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
      <div className='chat-header mb-2'>USER NAME</div>
      <input
        value={review}
        onChange={(e) => handleOnChange(e)}
        className='chat-bubble text-violet-darker bg-grey-highlight focus:outline-none focus:ring focus:ring-violet-300'
        type='text'
      />
      <div className='chat-footer flex flex-row gap-2 '>
        {/* <Rating /> */}
        <button
          onClick={handleOnClick}
          className='w-24 mt-2 text-violet-darker bg-gold-highlight flex text-l font-semibold justify-around items-center place-self-center py-2'
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CommentToPost;
