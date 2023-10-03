import CommentSection from '@/components/CommentSection';
import { getWine } from '@/sanity/sanity-utils';
import Image from 'next/image';

interface Props {
  params: { slug: string };
}

const WinePage = async ({ params }: Props) => {
  const slug = params.slug;
  const wine = await getWine(slug);
  return (
    <div className=' mt-10'>
      <div className='grid grid-flow-col grid-cols-6 justify-items-end gap-4 '>
        <div className='col-start-2  '>
          <Image
            width={160}
            height={180}
            alt='Image of a wine bottle'
            src={wine.imageUrl}
          />
          {/* <Rating label='Tasted by 5 people' /> */}
        </div>

        <div className='col-start-3 col-span-3 '>
          <h1 className='text-2xl font-medium'>{wine.name}</h1>
          <p>{wine.description}</p>
        </div>
      </div>
      <div className='bg-violet-dark mx-14 mt-8'>
        <CommentSection />
      </div>
    </div>
  );
};

export default WinePage;
