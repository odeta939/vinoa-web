'use client';
import ReviewToPost from '../ReviewToPost';
import PreviousReviews from '../PreviousRatings';
interface Props {
  wine: Wine;
}

const CommentSection = ({ wine }: Props) => {
  console.log('hi from CommentSection');
  const { slug = '', _id } = wine;
  // const { data: session }: any = useSession();
  return (
    <div className='p-6'>
      <ReviewToPost wineId={_id} />
      <PreviousReviews slug={slug} />
    </div>
  );
};

export default CommentSection;
