import CommentSection from '@/components/CommentSection';
import Rating from '@/components/Rating';
import { getAverageRating } from '@/lib/utils/helperFunctions';
import { getReviewsForWine } from '@/sanity/sanity-utils/review-utils';
import { getWine } from '@/sanity/sanity-utils/wine-utils';
import Image from 'next/image';

interface Props {
  params: { slug: string };
}

const WinePage = async ({ params }: Props) => {
  const slug = params.slug;
  const wine: Wine = await getWine(slug);
  const reviews = await getReviewsForWine(slug);
  const averageRating = getAverageRating(reviews);

  return (
    <div className=''>
      <div className=''>
        <h2>{wine.name}</h2>
        <Image
          width={160}
          height={180}
          alt='Image of a wine bottle'
          src={wine.imageUrl}
        />
        <Rating
          label={`Rated ${reviews.length} times`}
          rating={averageRating}
        />
      </div>
      {/* <div className='grid grid-flow-col grid-cols-6 justify-items-end gap-4 '>
      

        <div className='col-start-3 col-span-3 '>
          <h1 className='text-2xl font-medium'>{wine.name}</h1>
          <p>{wine.description}</p>
        </div>
      </div>
      <div className='bg-violet-dark mx-14 mt-8'>
        <CommentSection wine={wine} />
      </div> */}
    </div>
  );
};

export default WinePage;
