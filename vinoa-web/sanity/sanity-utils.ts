import { groq } from 'next-sanity';
import client from './sanityClient';

export async function createComment(review :Review ) {
await client.create({
    _type: 'review',
    rating: review.rating,
    comment: review.comment,
    wine: { _ref: review.wineId, _type: 'reference' },
  });
}

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

export async function getRatings(): Promise<Array<Review>> {
  const reviews: Array<Review> = await client.fetch(
    groq`*[_type == "review"]{
    _id,
    rating,
    comment,
    "wine" : wine->slug.current,
  }`,
    {
      cache: 'no-store',
    }
  );

  return reviews;
}

export async function getUser(email: string): Promise<User> {
  const user = await client.fetch(
    groq`*[_type == "user" && email == $email][0]{
    name,
    email,
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
    { email },
    {
      cache: 'no-store',
    }
  );

  return user;
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

export async function getReviewsForWine(slug: string): Promise<Array<Review>> {
  const reviews: Array<Review> = await client.fetch(
    groq`*[_type == "review" && wine->slug.current == $slug]{
    _id,
    rating,
    comment,
    "wine" : wine->slug.current,
  }`,
    { slug },
    {
      cache: 'no-store',
    }
  );

  return reviews;
}