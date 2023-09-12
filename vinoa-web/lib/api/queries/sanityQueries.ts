import { groq } from "next-sanity";
import sanityClient from "../Sanity/sanityClient";

export default async function getWines() {
  const wines = await sanityClient.fetch(groq`*[_type == "wine"]{name}`, {
    cache: 'no-store',
  });

  return wines;
}
