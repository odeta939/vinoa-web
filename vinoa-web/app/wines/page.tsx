import WineList from '@/components/WineList';
import { getTags } from '@/sanity/sanity-utils/tag-utils';
import { getWines } from '@/sanity/sanity-utils/wine-utils';

export const dynamic = 'force-dynamic';
const WinesPage = async () => {
  const wines = await getWines();
  const tags: string[] = await getTags();
  return <WineList wines={wines} tags={tags} />;
};

export default WinesPage;
