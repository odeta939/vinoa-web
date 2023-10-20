import WineListCard from '@/components/WineListCard';
import { getCurrentMonthAsRange } from '@/lib/utils/helperFunctions';
import { getThisMonthsWines } from '@/sanity/sanity-utils/wine-utils';

const MonthsWinePage = async () => {
  const date = getCurrentMonthAsRange();

  const wines: Wine[] = await getThisMonthsWines(date.from, date.to);

  return (
    <div>
      <h1>MonthsWinePage</h1>
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

export default MonthsWinePage;
