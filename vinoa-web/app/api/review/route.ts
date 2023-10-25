import { createReview } from '@/sanity/sanity-utils/review-utils';
import { getUser } from '@/sanity/sanity-utils/user-utils';

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const response: ReviewDTO = await req.json();
  const user = await getUser(response.userId);
  const reviewToPost = {
    rating: response.rating,
    comment: response.comment,
    wineId: response.wineId,
    userId: user._id,
  };
  await createReview(reviewToPost);
  return NextResponse.json({ message: 'ok' });
}
