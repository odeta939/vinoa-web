import WineCard from '@/components/WineCard';
import { getWines } from '@/sanity/sanity-utils';
import Link from 'next/link';

const WinesPage = async () => {
  const wines: Wine[] = await getWines();
  return (
    <div>
      <h1>Wine Page</h1>
      <ul>
        {wines.map((wine) => (
          <Link href={`/wine/${wine.slug}`} key={wine._id}>
            <WineCard wine={wine}></WineCard>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default WinesPage;
