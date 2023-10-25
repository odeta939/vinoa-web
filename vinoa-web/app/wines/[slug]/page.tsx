import CommentSection from '@/components/CommentSection';
import Rating from '@/components/Rating';
import WineInformationSection from '@/components/WineInformationSection/WineInformationSection';
import { getAverageRating } from '@/lib/utils/helperFunctions';
import { getReviewsForWine } from '@/sanity/sanity-utils/review-utils';
import { getWine } from '@/sanity/sanity-utils/wine-utils';
import Image from 'next/image';

interface Props {
  params: { slug: string };
}

const WinePage = async ({ params }: Props) => {
  const slug = params.slug;
  const wine = await getWine(slug);

  return (
    <div className='px-4 md:px-14'>
      <WineInformationSection wine={wine} />

      <CommentSection wine={wine} />
    </div>
  );
};

export default WinePage;
