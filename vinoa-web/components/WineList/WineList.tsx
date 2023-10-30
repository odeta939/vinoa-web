'use client';
import WineListCard from '../WineListCard';
import { useState } from 'react';

interface Props {
  wines: Wine[];
  tags: string[];
}

const WineList = ({ wines, tags }: Props) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [winesToShow, setWinesToShow] = useState(wines);

  const handleOnClick = (tag: string) => {
    setActiveFilter(tag);
    if (tag === 'all') {
      setWinesToShow(wines);
    } else {
      const filteredWines = wines.filter((wine) => wine.tag == tag);
      setWinesToShow(filteredWines);
      setActiveFilter(tag);
    }
  };
  console.log(tags);
  return (
    <div>
      <div>
        <ul className='flex flex-row justify-center md:justify-start text-xs md:text-base md:pl-8 pb-6'>
          <li className='m-2'>
            <button
              onClick={() => handleOnClick('all')}
              className={`${'all' == activeFilter && 'ring-2 ring-black '} ${
                'all' != activeFilter &&
                'hover:underline-offset-4 hover:underline'
              } `}
            >
              All wines
            </button>
          </li>
          {tags.map((tag, idx) => (
            <li className='m-2' key={idx}>
              <button
                className={`${tag == activeFilter && 'ring-2 ring-black '} ${
                  tag != activeFilter &&
                  'hover:underline-offset-4 hover:underline'
                } `}
                onClick={() => handleOnClick(tag)}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <ul className='flex flex-col md:justify-items-center gap-4 items-center lg:grid lg:grid-cols-2 mx-4 lg:mx-8'>
        {winesToShow.map((wine) => (
          <li className='w-full md:w-auto lg:w-full mb-6' key={wine._id}>
            <WineListCard wine={wine}></WineListCard>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default WineList;
