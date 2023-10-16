import { groq } from 'next-sanity';
import client from '../sanityClient';



export async function getWines(): Promise<Array<Wine>> {
  const wines: Array<Wine> = await client.fetch(
    groq`*[_type == "wine"]{
    _id,
    name,
    "slug" : slug.current,
    "imageUrl" : mainImage.asset->url,
    country,
    region,
    smell,
    taste,
    colour,

  }`,
    {
      cache: 'no-store',
    }
  );

  return wines;
}

export async function getWine(slug: string): Promise<Wine> {
  const wine: Wine = await client.fetch(
    groq`*[_type == "wine" && slug.current == $slug][0]{
    _id,
    name,
    "slug" : slug.current,
    description,
    "imageUrl" : mainImage.asset->url,
    country,
    region,
    smell,
    taste,
    colour,

  }`,
    { slug },
    {
      cache: 'no-store',
    }
  );

  return wine;
}



export async function getThisMonthsWines(dateFrom: string, dateTo: string) {
  const wines: Array<Wine> = await client.fetch(
    groq`*[_type == "wine" && dateOfTasting >= $dateFrom && dateOfTasting <= $dateTo]{
    _id,
    name,
    "slug" : slug.current,
    "imageUrl" : mainImage.asset->url,
    country,
    region,
    smell,
    taste,
    colour,
  }`,
    { dateFrom, dateTo },
    {
      cache: 'no-store',
    }
  );

  return wines;
}
