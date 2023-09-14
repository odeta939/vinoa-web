import WineCarousel from '@/components/WineCarousel';
import WineButton from '@/components/WineButton';
import { getWines } from '@/sanity/sanity-utils';
import WineCard from '@/components/WineCard';
import Link from 'next/link';

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
