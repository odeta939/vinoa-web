interface RatingProps {
  label?: string;
}
const Rating = ({ label }: RatingProps) => {
  return (
    <div className='mt-4'>
      {label && <p>{label}</p>}
      <div className='rating'>
        <input
          type='radio'
          name='rating-1'
          className='mask mask-star bg-gold-highlight'
        />
        <input
          type='radio'
          name='rating-1'
          className='mask mask-star bg-gold-highlight'
          checked
        />
        <input
          type='radio'
          name='rating-1'
          className='mask mask-star bg-gold-highlight'
        />
        <input
          type='radio'
          name='rating-1'
          className='mask mask-star bg-gold-highlight'
        />
        <input
          type='radio'
          name='rating-1'
          className='mask mask-star bg-gold-highlight'
        />
      </div>
    </div>
  );
};
export default Rating;
