import { groq } from 'next-sanity';
import client from '../sanityClient';

export async function createUser(user: User) {
  await client.create({
    _type: 'user',
    name: user.name,
    uid: user.uid,
    slug: {
      current: user.slug,
    },
  });
  return user;
}

export async function getUser(id: string): Promise<User> {
  const user = await client.fetch(
    groq`*[_type == "user" && uid == $id][0]{
    name,
    uid,
    "slug" : slug.current,
    "imageUrl" : image.asset->url,
    "wines" : *[_type == "wine" && references(^._id)][]{
      _id,
    name,
    "slug" : slug.current,
    "imageUrl" : mainImage.asset->url,
    country,
    region,
    smell,
    taste,
    price,
    "tag": *[_id == ^.tag._ref][0].name,
    }
  }`,
    { id },
    {
      cache: 'no-store',
    }
  );

  return user;
}
