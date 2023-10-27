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
        className={`m-auto w-80 h-[460px] sm:w-64 sm:h-[390px] xl:w-80 xl:h-[460px] p-4 px-5 mb-1 bg-neutral-50 rounded-3xl shadow-[4px_4px_4px_rgba(0,0,0,0.45)] ${
          border && 'border-wine-red border-4'
        }`}
      >
        <div className='w-28 h-48 xl:w-32 xl:h-56 mx-auto relative'>
          <Image
            className='rounded-3xl'
            alt='Image of a wine bottle'
            src={`${imageUrl}`}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='bg-neutral-50 w-16 h-7 rounded-3xl text-center ring-black ring-1 text-black text-sm mt-4 xl:mt-6 py-1'>
          {tag}
        </div>
        <div className='text-black mt-3'>
          <p className='text-xl xl:text-2xl'>{name}</p>
          <p className='text-wine-red text-base xl:text-lg'>{price} NOK</p>
          <div className='grid grid-cols-2 gap-x-10 gap-[2px] xl:text-base text-sm'>
            <p>Taste</p> <p>{taste}</p>
            <p>Aroma</p> <p>{smell}</p>
            <p>Body</p> <p>{body}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
