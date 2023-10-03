'use client';
import CommentToPost from '../CommentToPost';
import PreviousRatings from '../PreviousRatings';

const CommentSection = () => {
  return (
    <div className='p-6'>
      <CommentToPost />
      <PreviousRatings />
    </div>
  );
};

export default CommentSection;
