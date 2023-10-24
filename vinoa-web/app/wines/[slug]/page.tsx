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
  const wine = await getWine(slug);
  const reviews = await getReviewsForWine(slug);
  const averageRating = getAverageRating(reviews);

  return (
    <div className=''>
      <div className='px-6'>
        <h2 className='text-xl text-[#19082E] md:hidden'>{wine.name}</h2>
        <div className='grid grid-cols-2 mt-4'>
          <div className='flex flex-col text-sm justify-between '>
            <h2 className='text-xl text-[#19082E] hidden md:text-3xl md:block pb-4'>
              {wine.name}
            </h2>
            <div className='text-xs mt-4 hidden md:block md:text-base pb-4'>
              <p>{wine.description}</p>
            </div>
            <div className='flex flex-row gap-2 '>
              <div className='grid grid-flow-row gap-4 font-semibold'>
                <p>Taste</p>
                <p>Aroma</p>
                <p>Body</p>
              </div>
              <div className='grid grid-flow-row gap-3'>
                <p>{wine.taste}</p>
                <p>{wine.smell}</p>
                <p>{wine.body}</p>
              </div>
            </div>
            <Rating label={`Average rating:`} rating={averageRating} />
          </div>

          <div className='w-24 h-38 md:w-44 md:h-76 mx-auto relative'>
            <Image
              className='rounded-3xl'
              alt='Image of a wine bottle'
              src={`${wine.imageUrl}`}
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
        <div className='text-xs mt-4 md:hidden'>
          <p>{wine.description}</p>
        </div>
      </div>

      {/* <div className='bg-violet-dark mx-14 mt-8'>
        <CommentSection wine={wine} />
      </div> */}
    </div>
  );
};

export default WinePage;
