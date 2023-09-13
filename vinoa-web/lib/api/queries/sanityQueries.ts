import { groq } from "next-sanity";
import sanityClient from "../Sanity/sanityClient";

export default async function getWines() {
  const wines : Array<Wine> = await sanityClient.fetch(groq`*[_type == "wine"]`, {
    cache: 'no-store',
  });

  return wines;
}
