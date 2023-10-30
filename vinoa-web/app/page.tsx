import { getThisMonthsWines, getWines } from '@/sanity/sanity-utils/wine-utils';
import WineTastingCard from '@/components/WineTastingCard';
import { getCurrentMonthAsRange } from '@/lib/utils/helperFunctions';
import WineCarousel from '@/components/WineCarousel';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const date = getCurrentMonthAsRange();

  const thisMonthsWines: Wine[] = await getThisMonthsWines(date.from, date.to);

  return (
    <main className='flex flex-grow flex-col justify-center items-center relative mt-28'>
      <div className='w-full m-auto md:hidden'>
        <WineCarousel wines={thisMonthsWines} />
      </div>

      <div className='hidden md:flex flex-grow flex-row place-items-center mt-12 gap-5 lg:gap-12 justify-around'>
        {thisMonthsWines.map((wine, index) => {
          return (
            <div className='' key={index}>
              <WineTastingCard wine={wine} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
