'use client';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

import 'swiper/css';
import { Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const WineCard = () => {
  return (
    <>
      <section className='py-16 bg-slate-400 absolute inset-x-0 bottom-0 '>
        <div className='text-blue-darker mb-10 flex w-full justify-between'>
          <div className='flex items-center gap-12'>
            <h2 className='text-3xl font-medium  leading-6'>
              Wines tasted before:
            </h2>
          </div>
          <div className='flex justify-end gap-3'>
            <button className='swiper-button image-swiper-button-prev bg-blue-lighter inline-flex h-10 w-10  place-content-center items-center rounded-full'>
              <ArrowLeftIcon className='h-4 w-4' />
            </button>
            <button className='swiper-button image-swiper-button-next bg-blue-lighter flex h-10 w-10  place-content-center items-center rounded-full'>
              <ArrowRightIcon className='h-4 w-4' />
            </button>
          </div>
        </div>

        <Swiper
          slidesPerView={2.3}
          spaceBetween={24}
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
          <SwiperSlide>
            <div className='bg-red-300 p-14'>card 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-red-300 p-14'>card 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-red-300 p-14'>card 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-red-300 p-14'>card 4</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-red-300 p-14'>card 4</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-red-300 p-14'>card 4</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-red-300 p-14'>card 4</div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
export default WineCard;
