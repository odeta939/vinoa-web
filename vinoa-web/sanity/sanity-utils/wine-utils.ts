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
    body,
    price,
    "tag": *[_id == ^.tag._ref][0].name,
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
    body,
    price,
    "tag": *[_id == ^.tag._ref][0].name,
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
    body,
    price,
    "tag": *[_id == ^.tag._ref][0].name,
  }`,
    { dateFrom, dateTo },
    {
      cache: 'no-store',
    }
  );

  return wines;
}
