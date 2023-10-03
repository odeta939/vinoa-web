import WineCard from '@/components/WineCard';
import { getWines } from '@/sanity/sanity-utils';

export const dynamic = 'force-dynamic';

const WinesPage = async () => {
  const wines: Wine[] = await getWines();
  return (
    <div>
      <h1>Wine Page</h1>
      <ul>
        {wines.map((wine) => (
          <WineCard wine={wine}></WineCard>
        ))}
      </ul>
    </div>
  );
};

export default WinesPage;
