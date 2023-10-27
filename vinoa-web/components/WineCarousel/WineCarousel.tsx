'use client';
import 'swiper/css';
import { EffectCards, Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import WineTastingCard from '../WineTastingCard';

interface WineProps {
  wines: Wine[];
}

const WineCarousel = ({ wines }: WineProps) => {
  return (
    <>
      <section className=''>
        <Swiper
          effect='cards'
          grabCursor={true}
          cardsEffect={{
            slideShadows: false,
            perSlideRotate: 5,
          }}
          centeredSlides={true}
          speed={400}
          keyboard={{
            enabled: true,
          }}
          modules={[Navigation, Keyboard, EffectCards]}
          className='mySwiper'
        >
          {wines.map((wine, index) => {
            return (
              <SwiperSlide key={wine._id} className='pt-5'>
                {({ isActive }) => (
                  <div
                    className={`${!isActive && 'blur-sm'} m-auto max-w-[280px]`}
                  >
                    <WineTastingCard wine={wine} border={isActive} />
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};
export default WineCarousel;
