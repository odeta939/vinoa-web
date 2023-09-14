import { getWine } from '@/sanity/sanity-utils';

interface Props {
  params: { slug: string };
}

const WinePage = async ({ params }: Props) => {
  const slug = params.slug;
  const wine = await getWine(slug);
  return (
    <div>
      <h1>Wine Page</h1>
      <p>{wine.name}</p>
    </div>
  );
};

export default WinePage;
