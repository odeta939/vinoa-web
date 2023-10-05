'use client';
import CommentToPost from '../CommentToPost';
import PreviousRatings from '../PreviousRatings';

interface Props {
  wine: Wine;
}

const CommentSection = ({ wine }: Props) => {
  return (
    <div className='p-6'>
      <CommentToPost wine={wine} />
      <PreviousRatings />
    </div>
  );
};

export default CommentSection;
