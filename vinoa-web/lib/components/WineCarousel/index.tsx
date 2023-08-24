'use client';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

import 'swiper/css';
import { Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import WineCard from '@/lib/components/WineCard';
import Wine from '@/lib/assets/Wine';

const WineCarousel = () => {
  return (
    <>
      <section className='py-16 bg-[#03d18f]/20 absolute inset-x-0 bottom-0 '>
        <div className='bg-white'></div>
        <div className=' mb-10 flex w-full justify-between'>
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
            <WineCard wineName="Wine A" />
          </SwiperSlide>
          <SwiperSlide>
            <WineCard wineName="Wine B"/>
          </SwiperSlide>
          <SwiperSlide>
            <WineCard wineName="Wine C"/>
          </SwiperSlide>
          <SwiperSlide>
            <WineCard wineName="Wine D"/>
          </SwiperSlide>
          <SwiperSlide>
            <WineCard wineName="Wine E"/>
          </SwiperSlide>
          <SwiperSlide>
            <WineCard wineName="Wine F"/>
          </SwiperSlide>
          <SwiperSlide>
            <WineCard wineName="Wine G"/>
          </SwiperSlide>
          <SwiperSlide>
            <WineCard wineName="Wine H"/>
          </SwiperSlide>
          <SwiperSlide>
            <WineCard wineName="Wine I"/>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
export default WineCarousel;
