import WineListCard from '@/components/WineListCard';
import { getWines } from '@/sanity/sanity-utils/wine-utils';

export const dynamic = 'force-dynamic';

const WinesPage = async () => {
  const wines: Wine[] = await getWines();
  return (
    <div>
      <h1>Wine Page</h1>
      <ul>
        {wines.map((wine) => (
          <li key={wine._id}>
            <WineListCard wine={wine}></WineListCard>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WinesPage;
