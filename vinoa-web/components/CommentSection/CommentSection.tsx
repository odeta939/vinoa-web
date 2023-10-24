'use client';
import ReviewToPost from '../ReviewToPost';
import PreviousReviews from '../PreviousRatings';
interface Props {
  wine: Wine;
}

const CommentSection = ({ wine }: Props) => {
  const { slug = '', _id } = wine;
  return (
    <div className='mt-10'>
      <ReviewToPost wineId={_id} />
      {/* <PreviousReviews slug={slug} /> */}
    </div>
  );
};

export default CommentSection;
