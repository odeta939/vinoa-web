import WineCarousel from '@/lib/components/WineCarousel';
import WineButton from '@/lib/components/WineButton';
import getWines from '@/lib/api/queries/sanityQueries';

export const dynamic = 'force-dynamic';

export default async function Home() {
  let wines = await getWines();
  console.log(wines.length);
  return (
    <main className='min-h-screen flex flex-col items-stretch'>
      <WineButton />

      <WineCarousel wines={wines} />
    </main>
  );
}
