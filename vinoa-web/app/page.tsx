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
    <main className='min-h-screen flex flex-col items-stretch'>
      
      <div className='flex flex-grow'>
        <div className='grid place-items-center grid-cols-1 gap-y-10 lg:grid-cols-3 w-full m-20'>
          {thisMonthsWines.map((wine, index) =>{
            
            return(
              <div key={index}>
                <WineTastingCard wine={wine}/>
              </div>
            )
          })}
        </div>
      </div>

    </main>
  );
}
