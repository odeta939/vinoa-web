import WineCarousel from '@/components/WineCarousel';
import WineButton from '@/components/WineButton';
import { getThisMonthsWines, getWines } from '@/sanity/sanity-utils/wine-utils';
import WineTastingCard from '@/components/WineTastingCard';
import { getCurrentMonthAsRange } from '@/lib/utils/helperFunctions';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const date = getCurrentMonthAsRange();

  const thisMonthsWines: Wine[] = await getThisMonthsWines(date.from, date.to);

  return (
    <main className='flex flex-grow justify-center items-center'>
      <div className='flex flex-row  flex-grow justify-around'>
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
