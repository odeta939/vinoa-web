import sanityClient from "@/sanity/sanityClient";
import { groq } from "next-sanity";


export async function getWines(): Promise<Array<Wine>> {
  const wines : Array<Wine> = await sanityClient.fetch(groq`*[_type == "wine"]{
    _id,
    name,
    "slug" : slug.current,
    "image" : mainImage.asset->url,
    country,
    region,
    smell,
    taste,
    colour,

  }`, {
    cache: 'no-store',
  });

  return wines;
}

export async function getWine(slug : string): Promise<Wine> {
  const wine : Wine = await sanityClient.fetch(groq`*[_type == "wine" && slug.current == $slug][0]{
    _id,
    name,
    "slug" : slug.current,
    "image" : mainImage.asset->url,
    country,
    region,
    smell,
    taste,
    colour,

  }`,{slug}
  , {
    cache: 'no-store',
  })

  return wine;
}

export async function getRatings(): Promise<Array<Rating>> {
  const ratings : Array<Rating> = await sanityClient.fetch(groq`*[_type == "rating"]{
    _id,
    rating,
    review,
    "wine" : wine->slug.current,
  }`, {
    cache: 'no-store',
  });

  return ratings;
}

export async function getAllRatingsForWine(slug: string) : Promise<Array<Rating>> {
  const ratings : Array<Rating> = await sanityClient.fetch(groq`*[_type == "rating" && wine->slug.current == $slug]{
    _id,
    rating,
    review,
  }`,{slug}, {
    cache: 'no-store',
  });

  return ratings;
}

export async function getUser(email : string) :Promise<User> {
  const user  = await sanityClient.fetch(groq`*[_type == "user" && email == $email][0]{
    name,
    email,
    "slug" : slug.current,
    "image" : image.asset->url,
    "wines" : *[_type == "wine" && references(^._id)][]{
      _id,
    name,
    "slug" : slug.current,
    "image" : mainImage.asset->url,
    country,
    region,
    smell,
    taste,
    colour,
    }
  }`,{email}, {
    cache: 'no-store',
  });

  return user;
}
