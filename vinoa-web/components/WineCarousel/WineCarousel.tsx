"use client";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "swiper/css";
import { Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import WineCard from "@/components/WineCard/WineCard";

interface WineProps {
  wines: Wine[];
}

const WineCarousel = ({ wines }: WineProps) => {
  return (
    <>
      <section className="bg-violet-darker relative">
        <div className="absolute z-10 h-full pointer-events-none flex justify-between w-full inset-y-0 top-0">
          <button className="bg-gradient-to-r from-violet-darker/80 from-50% pointer-events-auto to-violet-darker/0 swiper-button image-swiper-button-prev self-center flex h-full w-24 place-content-center items-center ">
            <AiOutlineArrowLeft className="h-20 w-20 text-grey-highlight" />
          </button>
          <button className="bg-gradient-to-l from-violet-darker/80 from-50% to-violet-darker/0 pointer-events-auto swiper-button image-swiper-button-next flex h-full w-24 place-self-end self-center justify-self-end place-content-center items-center ">
            <AiOutlineArrowRight className="h-20 w-20 text-grey-highlight" />
          </button>
        </div>
        <Swiper
          slidesPerView={2.3}
          spaceBetween={60}
          speed={600}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          keyboard={{
            enabled: true,
          }}
          modules={[Navigation, Keyboard]}
          className="mySwiper"
        >
          {wines.map((wine) => (
            <SwiperSlide key={wine._id}>
              <WineCard wine={wine} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};
export default WineCarousel;
