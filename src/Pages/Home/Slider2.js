import React from "react";

import { EffectFade, Navigation } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Pagination } from "swiper";

const Slider2 = () => {
  return (
    <div className="bg-[#E4E1DF] px-10">
      <div className="py-16">
        <div className="flex gap-8 text-lg text-[#2E4239] font-medium">
          <p>NEIGHBOURHOOD</p>
          <p>•</p>
          <p>HOOD</p>
          <p>•</p>
          <p>THE BLOCK</p>
        </div>
        <h1 className="text-8xl text-[#2E4239] font-semibold py-1">
          DOWNTOWN —
        </h1>
        <div className="max-w-sm">
          <p>
            Known as one of the safest North American hubs, Downtown Montreal is
            vibrant with shoppers, office workers and students from McGill and
            Concordia Universities.
          </p>
        </div>
      </div>
      <div>
        <Swiper
          pagination={{
            el: ".my-custom-pagination-div",
            clickable: true,
          }}
          loop={true}
          effect={"fade"}
          // autoplay={{
          //   delay: 1500,
          //   disableOnInteraction: false,
          // }}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          modules={[Pagination, Navigation, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-[#E4E1DF] hero">
              <div className="hero-content gap-32 items-start flex-col lg:flex-row-reverse">
                <div className="w-6/12 flex flex-col">
                  <div className="w-full flex">
                    <div className="flex-1"></div>
                    <div className="flex-none w-8/12">
                      <img src="https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />
                    </div>
                  </div>
                  <div className="flex justify-end my-7 w-full gap-4">
                    <div className="border border-[#2E4239] text-[#2E4239] cursor-pointer custom-swiper-button-prev p-[6px] rounded-full">
                      <AiOutlineArrowLeft />
                    </div>
                    <div className="border border-[#2E4239] text-[#2E4239] cursor-pointer custom-swiper-button-next p-[6px] rounded-full">
                      <AiOutlineArrowRight />
                    </div>
                  </div>
                  <div className="text-start mt-8">
                    <h1 className="text-3xl font-medium">
                      CLOSE TO EVERYTHING
                    </h1>
                    <p>
                      Steps away from two landmark Universities, the Museum of
                      Fine Arts, Premium shopping destinations, Bell Center and
                      other city landmarks. You won’t need to commute in order
                      to enjoy the city’s most entertaining spots.
                    </p>
                  </div>
                </div>
                <div className="w-11/12">
                  <img
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#E4E1DF] hero">
              <div className="hero-content gap-32 items-start flex-col lg:flex-row-reverse">
                <div className="w-6/12 flex flex-col">
                  <div className="w-full flex">
                    <div className="flex-1"></div>
                    <div className="flex-none w-8/12">
                      <img src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />
                    </div>
                  </div>
                  <div className="flex justify-end my-7 w-full gap-4">
                    <div className="border border-[#2E4239] text-[#2E4239] cursor-pointer custom-swiper-button-prev p-[6px] rounded-full">
                      <AiOutlineArrowLeft />
                    </div>
                    <div className="border border-[#2E4239] text-[#2E4239] cursor-pointer custom-swiper-button-next p-[6px] rounded-full">
                      <AiOutlineArrowRight />
                    </div>
                  </div>
                  <div className="text-start mt-8">
                    <h1 className="text-3xl font-medium">
                    THE PERFECT MIX
                    </h1>
                    <p>
                    Montreal's famous food and drink scene is right at your doorstep, and nearby Metro stations will take you anywhere in the city.
                    </p>
                  </div>
                </div>
                <div className="w-11/12">
                  <img
                    src="https://images.unsplash.com/photo-1605825831039-8b6b4199b04a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider2;
