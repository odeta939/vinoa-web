interface RatingProps {
  lable?: string;
}
const Rating = ({ lable }: RatingProps) => {
  return (
    <div className="mt-4">
      {lable && <p>{lable}</p>}
      <div className="rating">
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-gold-highlight"
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-gold-highlight"
          checked
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-gold-highlight"
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-gold-highlight"
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-gold-highlight"
        />
      </div>
    </div>
  );
};
export default Rating;
