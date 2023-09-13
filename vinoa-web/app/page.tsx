import WineCarousel from '@/lib/components/WineCarousel';
import WineButton from '@/lib/components/WineButton';
import { getWines } from '@/sanity/sanity-utils';

export const dynamic = 'force-dynamic';

export default async function Home() {
  let wines = await getWines();
  return (
    <main className='min-h-screen flex flex-col items-stretch'>
      <WineButton />

      <WineCarousel wines={wines} />
    </main>
  );
}
