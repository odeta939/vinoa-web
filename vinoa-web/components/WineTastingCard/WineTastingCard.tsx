import Image from 'next/image';
import Link from 'next/link';

interface WineTastingProps {
  wine: Wine;
  border?: boolean;
}
export default function WineTastingCard({
  wine: { name, slug, imageUrl, tag, price, taste, smell, body },
  border = false,
}: WineTastingProps) {
  return (
    <Link href={`/wines/${slug}`}>
      <div
        className={`m-auto w-11/12 h-[460px] md:w-56 md:h-[400px] lg:w-72 lg:h-[460px] xl:w-80 xl:h-[490px] 3xl:w-[600px] 3xl:h-[820px] p-4 px-5 mb-1 bg-neutral-50 rounded-3xl shadow-[4px_4px_4px_rgba(0,0,0,0.45)] ${
          border && 'border-wine-red border-4'
        }`}
      >
        <div className='w-28 h-48 xl:w-32 xl:h-56 3xl:w-6/12 3xl:h-1/2 mx-auto relative'>
          <Image
            className='rounded-3xl'
            alt='Image of a wine bottle'
            src={`${imageUrl}`}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='bg-neutral-50 w-16 h-7 3xl:w-32 3xl:h-14 3xl:text-2xl rounded-3xl text-center ring-black ring-1 text-black text-sm mt-4 3xl:py-3 xl:mt-6 py-1'>
          {tag}
        </div>
        <div className='text-black mt-3 3xl:mt-9'>
          <p className='text-xl 3xl:text-5xl'>{name}</p>
          <p className='text-wine-red text-base xl:text-lg 3xl:text-2xl 3xl:mt-5'>
            {price} NOK
          </p>
          <div className='grid grid-cols-2 gap-x-10 gap-[2px] md:gap-2 md:mt-1 lg:gap-3 lg:mt-3 lg:text-base text-sm md:text-xs 3xl:text-2xl 3xl:mt-5 3xl:gap-4'>
            <p>Taste</p> <p>{taste}</p>
            <p>Aroma</p> <p>{smell}</p>
            <p>Body</p> <p>{body}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
