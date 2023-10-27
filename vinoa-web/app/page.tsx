import { getThisMonthsWines, getWines } from '@/sanity/sanity-utils/wine-utils';
import WineTastingCard from '@/components/WineTastingCard';
import { getCurrentMonthAsRange } from '@/lib/utils/helperFunctions';
import { Swiper } from 'swiper/react';
import { Keyboard, Navigation } from 'swiper/modules';
import WineCarousel from '@/components/WineCarousel';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const date = getCurrentMonthAsRange();

  const thisMonthsWines: Wine[] = await getThisMonthsWines(date.from, date.to);

  return (
    <main className='flex flex-grow flex-col justify-center items-center relative mt-28 overflow-hidden'>
      <div className='flex flex-grow flex-col'>
        <div className='w-10/12  m-auto top-0 bottom-0 left-0 right-0 absolute md:hidden'>
          <WineCarousel wines={thisMonthsWines} />
        </div>

        <div className='flex flex-grow flex-row gap-14 sm:place-items-center ml-[350px] mt-12 sm:mt-0 sm:ml-0 justify-around blur-sm md:filter-none'>
          {thisMonthsWines.map((wine, index) => {
            return (
              <div className='' key={index}>
                <WineTastingCard wine={wine} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
