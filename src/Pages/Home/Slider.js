import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BiArea, BiBath, BiBed } from "react-icons/bi";

import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Slider = () => {
  return (
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
          <div className="hero px-8 text-white bg-[#2E4239]">
            <div className="hero-content w-full flex-col">
              <div className="flex items-end w-full justify-between my-4">
                <div className="text-left w-full">
                  <h1 className="font-sub text-sm uppercase">
                    AVAILABLE units
                  </h1>
                  <h1 className="text-8xl font-medium">LOFTS</h1>
                </div>
                <div className="flex justify-center w-full gap-4">
                  <div className="border cursor-pointer custom-swiper-button-prev p-[6px] rounded-full">
                    <AiOutlineArrowLeft />
                  </div>
                  <div className="border cursor-pointer custom-swiper-button-next p-[6px] rounded-full">
                    <AiOutlineArrowRight />
                  </div>
                </div>
                <div className="flex gap-4 justify-between text-[#586861] w-full text-3xl">
                  <h1 className="text-8xl font-medium uppercase">1br</h1>
                  <h1 className="text-8xl font-medium uppercase">2br</h1>
                </div>
              </div>
              <div className="flex items-center gap-32 flex-col lg:flex-row">
                <div className="hidden md:block lg:block w-full">
                  <img
                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
                    className="lg:shadow-2xl"
                  />
                </div>
                <div className="w-9/12">
                  <div className="flex flex-col gap-16">
                    <p className="text-2xl text-left">
                      Simple yet spacious. Our studios are the perfect pied à
                      terre. Starting at $1850/month all included on a 12-month
                      lease.
                    </p>
                    <div className="text-lg text-left">
                      <p>
                        <BiArea className="inline text-2xl" /> 453 sq. ft.
                      </p>
                      <p>
                        <BiBed className="inline text-2xl" /> 1 Studio
                      </p>
                      <p>
                        <BiBath className="inline text-2xl" /> 1
                      </p>
                    </div>
                    <button className="p-3 text-sm hover:bg-gray-500 hover:text-white uppercase bg-white text-gray-700 border w-48">See A virtual tour</button>
                  </div>
                  {/* <div className="my-custom-pagination-div text-center mt-10" /> */}
                </div>
              </div>
              <h1 className="my-4">Furnished in partnership with <span className="uppercase font-medium ml-4">Monarc<span className="font-thin">mart</span></span></h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero px-8 text-white bg-[#2E4239]">
            <div className="hero-content w-full flex-col">
              <div className="flex items-end w-full justify-between my-4">
                <div className="text-left w-full">
                  <h1 className="font-sub text-sm uppercase">
                    AVAILABLE units
                  </h1>
                  <h1 className="text-8xl font-medium">2BR</h1>
                </div>
                <div className="flex justify-center w-full gap-4">
                  <div className="border cursor-pointer custom-swiper-button-prev p-[6px] rounded-full">
                    <AiOutlineArrowLeft />
                  </div>
                  <div className="border cursor-pointer custom-swiper-button-next p-[6px] rounded-full">
                    <AiOutlineArrowRight />
                  </div>
                </div>
                <div className="flex gap-4 justify-between text-[#586861] w-full text-3xl">
                  <h1 className="text-8xl font-medium uppercase">1br</h1>
                  <h1 className="text-8xl font-medium uppercase">2br</h1>
                </div>
              </div>
              <div className="flex items-center gap-32 flex-col lg:flex-row">
                <div className="hidden md:block lg:block w-full">
                  <img
                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
                    className="lg:shadow-2xl"
                  />
                </div>
                <div className="w-9/12">
                  <div className="flex flex-col gap-16">
                    <p className="text-2xl text-left">
                      Simple yet spacious. Our studios are the perfect pied à
                      terre. Starting at $1850/month all included on a 12-month
                      lease.
                    </p>
                    <div className="text-lg text-left">
                      <p>
                        <BiArea className="inline text-2xl" /> 453 sq. ft.
                      </p>
                      <p>
                        <BiBed className="inline text-2xl" /> 1 Studio
                      </p>
                      <p>
                        <BiBath className="inline text-2xl" /> 1
                      </p>
                    </div>
                    <button className="p-3 text-sm hover:bg-gray-500 hover:text-white uppercase bg-white text-gray-700 border w-48">See A virtual tour</button>
                  </div>
                  {/* <div className="my-custom-pagination-div text-center mt-10" /> */}
                </div>
              </div>
              <h1 className="my-4">Furnished in partnership with <span className="uppercase font-medium ml-4">Monarc<span className="font-thin">mart</span></span></h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero px-8 text-white bg-[#2E4239]">
            <div className="hero-content w-full flex-col">
              <div className="flex items-end w-full justify-between my-4">
                <div className="text-left w-full">
                  <h1 className="font-sub text-sm uppercase">
                    AVAILABLE units
                  </h1>
                  <h1 className="text-8xl font-medium">THOUSE</h1>
                </div>
                <div className="flex justify-center w-full gap-4">
                  <div className="border cursor-pointer custom-swiper-button-prev p-[6px] rounded-full">
                    <AiOutlineArrowLeft />
                  </div>
                  <div className="border cursor-pointer custom-swiper-button-next p-[6px] rounded-full">
                    <AiOutlineArrowRight />
                  </div>
                </div>
                <div className="flex gap-4 justify-between text-[#586861] w-full text-3xl">
                  <h1 className="text-8xl font-medium uppercase">1br</h1>
                  <h1 className="text-8xl font-medium uppercase">2br</h1>
                </div>
              </div>
              <div className="flex items-center gap-32 flex-col lg:flex-row">
                <div className="hidden md:block lg:block w-full">
                  <img
                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
                    className="lg:shadow-2xl"
                  />
                </div>
                <div className="w-9/12">
                  <div className="flex flex-col gap-16">
                    <p className="text-2xl text-left">
                      Simple yet spacious. Our studios are the perfect pied à
                      terre. Starting at $1850/month all included on a 12-month
                      lease.
                    </p>
                    <div className="text-lg text-left">
                      <p>
                        <BiArea className="inline text-2xl" /> 453 sq. ft.
                      </p>
                      <p>
                        <BiBed className="inline text-2xl" /> 1 Studio
                      </p>
                      <p>
                        <BiBath className="inline text-2xl" /> 1
                      </p>
                    </div>
                    <button className="p-3 text-sm hover:bg-gray-500 hover:text-white uppercase bg-white text-gray-700 border w-48">See A virtual tour</button>
                  </div>
                  {/* <div className="my-custom-pagination-div text-center mt-10" /> */}
                </div>
              </div>
              <h1 className="my-4">Furnished in partnership with <span className="uppercase font-medium ml-4">Monarc<span className="font-thin">mart</span></span></h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero px-8 text-white bg-[#2E4239]">
            <div className="hero-content w-full flex-col">
              <div className="flex items-end w-full justify-between my-4">
                <div className="text-left w-full">
                  <h1 className="font-sub text-sm uppercase">
                    AVAILABLE units
                  </h1>
                  <h1 className="text-8xl font-medium">1BR</h1>
                </div>
                <div className="flex justify-center w-full gap-4">
                  <div className="border cursor-pointer custom-swiper-button-prev p-[6px] rounded-full">
                    <AiOutlineArrowLeft />
                  </div>
                  <div className="border cursor-pointer custom-swiper-button-next p-[6px] rounded-full">
                    <AiOutlineArrowRight />
                  </div>
                </div>
                <div className="flex gap-4 justify-between text-[#586861] w-full text-3xl">
                  <h1 className="text-8xl font-medium uppercase">1br</h1>
                  <h1 className="text-8xl font-medium uppercase">2br</h1>
                </div>
              </div>
              <div className="flex items-center gap-32 flex-col lg:flex-row">
                <div className="hidden md:block lg:block w-full">
                  <img
                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
                    className="lg:shadow-2xl"
                  />
                </div>
                <div className="w-9/12">
                  <div className="flex flex-col gap-16">
                    <p className="text-2xl text-left">
                      Simple yet spacious. Our studios are the perfect pied à
                      terre. Starting at $1850/month all included on a 12-month
                      lease.
                    </p>
                    <div className="text-lg text-left">
                      <p>
                        <BiArea className="inline text-2xl" /> 453 sq. ft.
                      </p>
                      <p>
                        <BiBed className="inline text-2xl" /> 1 Studio
                      </p>
                      <p>
                        <BiBath className="inline text-2xl" /> 1
                      </p>
                    </div>
                    <button className="p-3 text-sm hover:bg-gray-500 hover:text-white uppercase bg-white text-gray-700 border w-48">See A virtual tour</button>
                  </div>
                  {/* <div className="my-custom-pagination-div text-center mt-10" /> */}
                </div>
              </div>
              <h1 className="my-4">Furnished in partnership with <span className="uppercase font-medium ml-4">Monarc<span className="font-thin">mart</span></span></h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
SwiperCore.use([Autoplay]);

export default Slider;
