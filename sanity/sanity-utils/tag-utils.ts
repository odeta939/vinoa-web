import { groq } from 'next-sanity';
import client from '../sanityClient';

export const getTags = async () => {
  const tags = await client.fetch(
    groq`*[_type == "tag"]{
      name
    }`,
    {},
    {
      cache: 'no-store',
    }
  );
  const tagNames = tags.map((tag: any) => tag.name);
  return tagNames;
};
