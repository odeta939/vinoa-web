import WineCarousel from '@/lib/components/WineCarousel';
import WineButton from '@/lib/components/WineButton';
import Navigation from '@/lib/components/Navigation';

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col items-stretch'>
      <Navigation />

      <WineButton />

      <WineCarousel />
    </main>
  );
}
