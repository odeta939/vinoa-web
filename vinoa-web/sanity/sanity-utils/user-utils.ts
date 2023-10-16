import { groq } from "next-sanity";
import client from "../sanityClient";

export async function createUser(user: User) {
  await client.create({
    _type: 'user',
    name: user.name,
    id: user.uid,
    slug:{
      current: user.slug
    }
    // image: { _ref: user.image, _type: 'reference' },
  });
  return user;
}

export async function getUser(id: string): Promise<User> {
  const user = await client.fetch(
    groq`*[_type == "user" && id == $id][0]{
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
    colour,
    }
  }`,
    { id },
    {
      cache: 'no-store',
    }
  );

  return user;
}

