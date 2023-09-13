import getWines from '@/lib/api/queries/sanityQueries';

const WinePage = async () => {
  const wines: Wine[] = await getWines();
  return (
    <div>
      <h1>Wine Page</h1>
      <ul>
        {wines.map((wine, idx) => (
          <li key={idx}>{wine.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default WinePage;
