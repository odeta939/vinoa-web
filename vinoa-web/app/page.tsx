'use client';
import WineCarousel from '@/components/WineCarousel';
import WineButton from '@/components/WineButton';
import { getWines } from '@/sanity/sanity-utils';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const wines = await getWines();

  const handleClick = () => {};
  return (
    <main className='min-h-screen flex flex-col items-stretch'>
      <WineButton handleClick={() => handleClick()} />
      <WineCarousel wines={wines} />
    </main>
  );
}
