'use client';
import 'swiper/css';
import { Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import WineTastingCard from '../WineTastingCard';

interface WineProps {
  wines: Wine[];
}

const WineCarousel = ({ wines }: WineProps) => {
  return (
    <>
      <section>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
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
          {wines.map((wine, index) => {
            return (
              <SwiperSlide key={wine._id}>
                <WineTastingCard wine={wine} border={true} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};
export default WineCarousel;
