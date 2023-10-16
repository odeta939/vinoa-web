import client from "../sanityClient";
import { groq } from 'next-sanity';

export async function createReview(review :Review ) {
  await client.create({
      _type: 'review',
      rating: review.rating,
      comment: review.comment,
      wine: { _ref: review.wineId, _type: 'reference' },
    });
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