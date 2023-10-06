const getCurrentMonthAsRange = () => {
  let start = new Date();
  start.setDate(1);
  let end = new Date(start);
  end.setMonth(end.getMonth() + 1);
  
  let from = start.toISOString();
  let to = end.toISOString();

  return { from, to };
}

const getAverageRating= (reviews: Review[]) => {
  let sum =0
  reviews.forEach((review) => {
    sum += review.rating;
  });
  return sum / reviews.length;
}
export { getAverageRating , getCurrentMonthAsRange};