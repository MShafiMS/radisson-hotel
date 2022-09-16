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
    <div id="hood" className="bg-[#E4E1DF] px-5 lg:px-10">
      <div className="hero">
        <div className="hero-content flex-col w-full justify-start py-16">
          <div className="flex flex-row mb-6 w-full gap-1 lg:gap-8 text-lg text-[#2E4239] font-medium">
            <p>NEIGHBOURHOOD</p>
            <p>•</p>
            <p>HOOD</p>
            <p>•</p>
            <p>THE BLOCK</p>
          </div>
          <h1 className="lg:text-8xl w-full text-5xl text-[#2E4239] font-semibold pb-6">
            DOWNTOWN <span className="hidden lg:inline">—</span>
          </h1>
          <div className="w-full">
            <p className="max-w-sm">
              Known as one of the safest North American hubs, Downtown Montreal
              is vibrant with shoppers, office workers and students from McGill
              and Concordia Universities.
            </p>
          </div>
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
            <div className="bg-[#E4E1DF] hero lg:pb-16">
              <div className="hero-content lg:gap-32 items-start flex-col-reverse lg:flex-row-reverse">
                <div className="lg:w-6/12 flex flex-col">
                  <div className="w-full lg:flex hidden">
                    <div className="flex-1"></div>
                    <div className="flex-none w-8/12">
                      <img src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />
                    </div>
                  </div>
                  <div className="flex justify-end lg:my-7 w-full gap-4">
                    <div className="border border-[#2E4239] text-[#2E4239] cursor-pointer custom-swiper-button-prev p-[6px] rounded-full">
                      <AiOutlineArrowLeft />
                    </div>
                    <div className="border border-[#2E4239] text-[#2E4239] cursor-pointer custom-swiper-button-next p-[6px] rounded-full">
                      <AiOutlineArrowRight />
                    </div>
                  </div>
                  <div className="text-start mt-8">
                    <h1 className="lg:text-3xl text-2xl text-[#2E4239] font-medium uppercase">
                      Lorem, ipsum.
                    </h1>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Enim ab fugit delectus excepturi consectetur dolore
                      laborum quam, qui libero vitae laboriosam assumenda eos,
                      dolorum optio necessitatibus explicabo voluptatum dicta
                      dolorem!
                    </p>
                  </div>
                </div>
                <div className="lg:w-11/12">
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
            <div className="bg-[#E4E1DF] hero lg:pb-16">
              <div className="hero-content lg:gap-32 items-start flex-col-reverse lg:flex-row-reverse">
                <div className="lg:w-6/12 flex flex-col">
                  <div className="w-full lg:flex hidden">
                    <div className="flex-1"></div>
                    <div className="flex-none w-8/12">
                      <img src="https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />
                    </div>
                  </div>
                  <div className="flex justify-end lg:my-7 w-full gap-4">
                    <div className="border border-[#2E4239] text-[#2E4239] cursor-pointer custom-swiper-button-prev p-[6px] rounded-full">
                      <AiOutlineArrowLeft />
                    </div>
                    <div className="border border-[#2E4239] text-[#2E4239] cursor-pointer custom-swiper-button-next p-[6px] rounded-full">
                      <AiOutlineArrowRight />
                    </div>
                  </div>
                  <div className="text-start mt-8">
                    <h1 className="lg:text-3xl text-2xl text-[#2E4239] font-medium uppercase">
                      amet consectetur
                    </h1>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Deserunt dolor voluptates pariatur suscipit ratione fuga
                      facere quo itaque molestias quidem earum qui sed iusto
                      quod, quisquam vel deleniti nostrum maiores.
                    </p>
                  </div>
                </div>
                <div className="lg:w-11/12">
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
