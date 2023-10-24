'use client';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

interface RatingProps {
  label?: string;
  rating: number;
  maxRating?: number;
  setRating?: (rating: number) => void;
}
const Rating = ({ label, rating, maxRating = 5, setRating }: RatingProps) => {
  return (
    <div className='mt-4 rating flex flex-col'>
      {label && <p>{label}</p>}
      <div className='flex flex-row'>
        {Array.from({ length: maxRating }, (_, i) => {
          const isFilled = i < rating;
          const StarIcon = isFilled ? AiFillStar : AiOutlineStar;
          const handleOnClick = () => {
            if (setRating) {
              setRating(i + 1);
            }
          };
          return (
            <StarIcon
              onClick={handleOnClick}
              key={i}
              className={
                'text-wine-red text-xl' + (setRating ? ' cursor-pointer' : '')
              }
            />
          );
        })}
      </div>
    </div>
  );
};
export default Rating;
