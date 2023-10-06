import WineCard from '@/components/WineCard';
import { getCurrentMonthAsRange } from '@/lib/utils/helperFunctions';
import { getThisMonthsWines } from '@/sanity/sanity-utils';

const MonthsWinePage = async () => {
  const date = getCurrentMonthAsRange();

  const wines: Wine[] = await getThisMonthsWines(date.from, date.to);

  return (
    <div>
      <h1>MonthsWinePage</h1>
      <ul>
        {wines.map((wine) => (
          <li key={wine._id}>
            <WineCard wine={wine}></WineCard>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonthsWinePage;
