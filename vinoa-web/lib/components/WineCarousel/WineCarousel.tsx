'use client';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

import 'swiper/css';
import { Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import WineCard from '@/lib/components/WineCard/WineCard';

const WineCarousel = () => {
  return (
    <>
      <section className='py-16 bg-violet-darker shrink'>
        <div className='flex w-full justify-between'>
          <div className='flex items-center gap-12'>
            <h2>Wines tasted before:</h2>
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
          <SwiperSlide>
            <WineCard
              wineName='Wine A'
              country='Italy'
              region='Tuscany'
              color='Red'
              smell='Fruity'
              taste='Dry'
            />
          </SwiperSlide>
          <SwiperSlide>
            <WineCard
              wineName='Wine B'
              country='Italy'
              region='Tuscany'
              color='Red'
              smell='Fruity'
              taste='Dry'
            />
          </SwiperSlide>
          <SwiperSlide>
            <WineCard
              wineName='Wine C'
              country='Italy'
              region='Tuscany'
              color='Red'
              smell='Fruity'
              taste='Dry'
            />
          </SwiperSlide>
          <SwiperSlide>
            <WineCard
              wineName='Wine D'
              country='Italy'
              region='Tuscany'
              color='Red'
              smell='Fruity'
              taste='Dry'
            />
          </SwiperSlide>
          <SwiperSlide>
            <WineCard
              wineName='Wine E'
              country='Italy'
              region='Tuscany'
              color='Red'
              smell='Fruity'
              taste='Dry'
            />
          </SwiperSlide>
          <SwiperSlide>
            <WineCard
              wineName='Wine F'
              country='Italy'
              region='Tuscany'
              color='Red'
              smell='Fruity'
              taste='Dry'
            />
          </SwiperSlide>
          <SwiperSlide>
            <WineCard
              wineName='Wine G'
              country='Italy'
              region='Tuscany'
              color='Red'
              smell='Fruity'
              taste='Dry'
            />
          </SwiperSlide>
          <SwiperSlide>
            <WineCard
              wineName='Wine H'
              country='Italy'
              region='Tuscany'
              color='Red'
              smell='Fruity'
              taste='Dry'
            />
          </SwiperSlide>
          <SwiperSlide>
            <WineCard
              wineName='Wine I'
              country='Italy'
              region='Tuscany'
              color='Red'
              smell='Fruity'
              taste='Dry'
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
export default WineCarousel;