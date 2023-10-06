import CommentToPost from '../CommentToPost';
import PreviousReviews from '../PreviousRatings';

interface Props {
  wine: Wine;
}

const CommentSection = ({ wine }: Props) => {
  const { slug = '', _id } = wine;
  return (
    <div className='p-6'>
      <CommentToPost wineId={_id} />
      <PreviousReviews slug={slug} />
    </div>
  );
};

export default CommentSection;
