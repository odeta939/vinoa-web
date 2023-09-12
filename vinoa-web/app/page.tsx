import WineCarousel from '@/lib/components/WineCarousel';
import WineButton from '@/lib/components/WineButton';

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col items-stretch'>
      <WineButton />

      <WineCarousel />
    </main>
  );
}
