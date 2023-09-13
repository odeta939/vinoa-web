'use client';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from '@heroicons/react/24/outline';

import 'swiper/css';
import { Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import WineCard from '@/lib/components/WineCard/WineCard';

interface WineProps {
  wines: Wine[];
}

const WineCarousel = ({ wines }: WineProps) => {
  console.log(wines);
  return (
    <>
      <section className='bg-violet-darker relative'>
        <div className='absolute z-10 h-full flex justify-between w-full inset-y-0 top-0'>
          {/* <div className='flex items-center z-0 gap-12'>
            <h2>Wines tasted before:</h2>
          </div> */}

          <button className='bg-gradient-to-r from-violet-darker/80 from-50%  to-violet-darker/0 swiper-button image-swiper-button-prev self-center flex h-full w-24 place-content-center items-center '>
            <ChevronLeftIcon className='h-20 w-20 text-grey-highlight' />
          </button>
          <button className='bg-gradient-to-l from-violet-darker/80 from-50% to-violet-darker/0 swiper-button image-swiper-button-next flex h-full w-24 place-self-end self-center justify-self-end place-content-center items-center '>
            <ChevronRightIcon className='h-20 w-20 text-grey-highlight' />
          </button>
        </div>
        <Swiper
          slidesPerView={2.3}
          spaceBetween={60}
          speed={600}
          navigation={{
            nextEl: '.image-swiper-button-next',
            prevEl: '.image-swiper-button-prev',
            disabledClass: 'swiper-button-disabled',
          }}
          keyboard={{
            enabled: true,
          }}
          modules={[Navigation, Keyboard]}
          className='mySwiper'
        >
          {wines.map((wine, idx) => (
            <SwiperSlide key={idx}>
              <WineCard
                name={wine.name}
                country={wine.country}
                region={wine.region}
                colour={wine.colour}
                smell={wine.smell}
                taste={wine.taste}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};
export default WineCarousel;
