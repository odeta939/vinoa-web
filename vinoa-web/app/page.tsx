import Logo from '@/lib/assets/Logo';
import Profile from '@/lib/assets/Profile';
import Navigation from '@/lib/components/Navigation';
import WineCard from '@/lib/components/WineCard';
import WineButton from '@/lib/components/WineButton';

export default function Home() {
  return (
    <main className=''>
      <Navigation />

      <WineButton />
      <WineCard />
    </main>
  );
}
