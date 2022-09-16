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
    <div id="units">
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
          <div className="hero lg:px-8 text-white bg-[#2E4239]">
            <div className="hero-content w-full flex-col">
              <div className="flex items-center w-full justify-between">
                <h1 className="font-sub text-sm uppercase whitespace-nowrap">
                  AVAILABLE units
                </h1>
                <div className="flex lg:hidden justify-end w-full gap-4">
                  <div className="border cursor-pointer custom-swiper-button-prev p-[6px] rounded-full">
                    <AiOutlineArrowLeft />
                  </div>
                  <div className="border cursor-pointer custom-swiper-button-next p-[6px] rounded-full">
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
              <div className="flex items-end w-full justify-between my-4">
                <div className="text-left w-full">
                  <h1 className="font-sub hidden lg:block text-sm uppercase">
                    AVAILABLE units
                  </h1>
                  <h1 className="lg:text-8xl text-5xl font-medium">LOFTS</h1>
                </div>
                <div className="lg:flex hidden justify-center w-full gap-4">
                  <div className="border cursor-pointer custom-swiper-button-prev p-[6px] rounded-full">
                    <AiOutlineArrowLeft />
                  </div>
                  <div className="border cursor-pointer custom-swiper-button-next p-[6px] rounded-full">
                    <AiOutlineArrowRight />
                  </div>
                </div>
                <div className="flex gap-4 justify-between text-[#586861] w-full text-3xl">
                  <h1 className="lg:text-8xl text-5xl font-medium uppercase">
                    1br
                  </h1>
                  <h1 className="lg:text-8xl text-5xl font-medium uppercase">
                    2br
                  </h1>
                </div>
              </div>
              <div className="flex items-center gap-6 lg:gap-32 flex-col lg:flex-row">
                <div className="w-full">
                  <img src="https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80" />
                </div>
                <div className="lg:w-9/12">
                  <div className="flex flex-col gap-6 lg:gap-16">
                    <p className="text-2xl text-left">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sunt odit architecto delectus suscipit ducimus repellat
                      non. Reprehenderit aut sequi in.
                    </p>
                    <div className="text-left mx-auto lg:mx-0">
                      <p>
                        <BiArea className="inline text-xl mr-3" /> 453 sq. ft.
                      </p>
                      <p>
                        <BiBed className="inline text-xl mr-3" /> 1 Studio
                      </p>
                      <p>
                        <BiBath className="inline text-xl mr-3" /> 1
                      </p>
                    </div>
                    <button className="p-3 mx-auto w-full lg:mx-0 text-sm hover:bg-gray-500 hover:text-white uppercase bg-white text-gray-700 border lg:w-48">
                      See A virtual tour
                    </button>
                  </div>
                  {/* <div className="my-custom-pagination-div text-center mt-10" /> */}
                </div>
              </div>
              <h1 className="lg:my-4">
                Furnished in partnership with{" "}
                <span className="uppercase font-medium ml-4">
                  Monarc<span className="font-thin">mart</span>
                </span>
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero lg:px-8 text-white bg-[#2E4239]">
            <div className="hero-content w-full flex-col">
              <div className="flex items-center w-full justify-between">
                <h1 className="font-sub text-sm uppercase whitespace-nowrap">
                  AVAILABLE units
                </h1>
                <div className="flex lg:hidden justify-end w-full gap-4">
                  <div className="border cursor-pointer custom-swiper-button-prev p-[6px] rounded-full">
                    <AiOutlineArrowLeft />
                  </div>
                  <div className="border cursor-pointer custom-swiper-button-next p-[6px] rounded-full">
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
              <div className="flex items-end w-full justify-between my-4">
                <div className="text-left w-full">
                  <h1 className="font-sub hidden lg:block text-sm uppercase">
                    AVAILABLE units
                  </h1>
                  <h1 className="lg:text-8xl text-5xl font-medium">1BR</h1>
                </div>
                <div className="lg:flex hidden justify-center w-full gap-4">
                  <div className="border cursor-pointer custom-swiper-button-prev p-[6px] rounded-full">
                    <AiOutlineArrowLeft />
                  </div>
                  <div className="border cursor-pointer custom-swiper-button-next p-[6px] rounded-full">
                    <AiOutlineArrowRight />
                  </div>
                </div>
                <div className="flex gap-4 justify-between text-[#586861] w-full text-3xl">
                  <h1 className="lg:text-8xl text-5xl font-medium uppercase">
                    2br
                  </h1>
                  <h1 className="lg:text-8xl text-5xl font-medium uppercase">
                    pen
                  </h1>
                </div>
              </div>
              <div className="flex items-center gap-6 lg:gap-32 flex-col lg:flex-row">
                <div className="w-full">
                  <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80" />
                </div>
                <div className="lg:w-9/12">
                  <div className="flex flex-col gap-6 lg:gap-16">
                    <p className="text-2xl text-left">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Expedita, voluptatum! Quia provident illo excepturi, quod
                      inventore sed nam tempore deserunt.
                    </p>
                    <div className="text-left mx-auto lg:mx-0">
                      <p>
                        <BiArea className="inline text-xl mr-3" /> 622 sq. ft.
                      </p>
                      <p>
                        <BiBed className="inline text-xl mr-3" /> 1
                      </p>
                      <p>
                        <BiBath className="inline text-xl mr-3" /> 1
                      </p>
                    </div>
                    <button className="p-3 mx-auto w-full lg:mx-0 text-sm hover:bg-gray-500 hover:text-white uppercase bg-white text-gray-700 border lg:w-48">
                      See A virtual tour
                    </button>
                  </div>
                  {/* <div className="my-custom-pagination-div text-center mt-10" /> */}
                </div>
              </div>
              <h1 className="lg:my-4">
                Furnished in partnership with{" "}
                <span className="uppercase font-medium ml-4">
                  Monarc<span className="font-thin">mart</span>
                </span>
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero lg:px-8 text-white bg-[#2E4239]">
            <div className="hero-content w-full flex-col">
              <div className="flex items-center w-full justify-between">
                <h1 className="font-sub text-sm uppercase whitespace-nowrap">
                  AVAILABLE units
                </h1>
                <div className="flex lg:hidden justify-end w-full gap-4">
                  <div className="border cursor-pointer custom-swiper-button-prev p-[6px] rounded-full">
                    <AiOutlineArrowLeft />
                  </div>
                  <div className="border cursor-pointer custom-swiper-button-next p-[6px] rounded-full">
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
              <div className="flex items-end w-full justify-between my-4">
                <div className="text-left w-full">
                  <h1 className="font-sub hidden lg:block text-sm uppercase">
                    AVAILABLE units
                  </h1>
                  <h1 className="lg:text-8xl text-5xl font-medium">2BR</h1>
                </div>
                <div className="lg:flex hidden justify-center w-full gap-4">
                  <div className="border cursor-pointer custom-swiper-button-prev p-[6px] rounded-full">
                    <AiOutlineArrowLeft />
                  </div>
                  <div className="border cursor-pointer custom-swiper-button-next p-[6px] rounded-full">
                    <AiOutlineArrowRight />
                  </div>
                </div>
                <div className="flex gap-4 justify-between text-[#586861] w-full text-3xl">
                  <h1 className="lg:text-8xl text-5xl font-medium uppercase">
                    THOUSE
                  </h1>
                </div>
              </div>
              <div className="flex items-center gap-6 lg:gap-32 flex-col lg:flex-row">
                <div className="w-full">
                  <img src="https://images.unsplash.com/photo-1505773508401-e26ca9845131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=961&q=80" />
                </div>
                <div className="lg:w-9/12">
                  <div className="flex flex-col gap-6 lg:gap-16">
                    <p className="text-2xl text-left">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut quibusdam rem ratione perspiciatis distinctio deserunt
                      dolores vel consectetur tenetur nesciunt.
                    </p>
                    <div className="text-left mx-auto lg:mx-0">
                      <p>
                        <BiArea className="inline text-xl mr-3" /> 740 sq. ft.
                      </p>
                      <p>
                        <BiBed className="inline text-xl mr-3" /> 2
                      </p>
                      <p>
                        <BiBath className="inline text-xl mr-3" /> 1
                      </p>
                    </div>
                    <button className="p-3 mx-auto w-full lg:mx-0 text-sm hover:bg-gray-500 hover:text-white uppercase bg-white text-gray-700 border lg:w-48">
                      See A virtual tour
                    </button>
                  </div>
                  {/* <div className="my-custom-pagination-div text-center mt-10" /> */}
                </div>
              </div>
              <h1 className="lg:my-4">
                Furnished in partnership with{" "}
                <span className="uppercase font-medium ml-4">
                  Monarc<span className="font-thin">mart</span>
                </span>
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero lg:px-8 text-white bg-[#2E4239]">
            <div className="hero-content w-full flex-col">
              <div className="flex items-center w-full justify-between">
                <h1 className="font-sub text-sm uppercase whitespace-nowrap">
                  AVAILABLE units
                </h1>
                <div className="flex lg:hidden justify-end w-full gap-4">
                  <div className="border cursor-pointer custom-swiper-button-prev p-[6px] rounded-full">
                    <AiOutlineArrowLeft />
                  </div>
                  <div className="border cursor-pointer custom-swiper-button-next p-[6px] rounded-full">
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
              <div className="flex items-end w-full justify-between my-4">
                <div className="text-left w-full">
                  <h1 className="font-sub hidden lg:block text-sm uppercase">
                    AVAILABLE units
                  </h1>
                  <h1 className="lg:text-8xl text-5xl font-medium">THOUSE</h1>
                </div>
                <div className="lg:flex hidden justify-center w-full gap-4">
                  <div className="border cursor-pointer custom-swiper-button-prev p-[6px] rounded-full">
                    <AiOutlineArrowLeft />
                  </div>
                  <div className="border cursor-pointer custom-swiper-button-next p-[6px] rounded-full">
                    <AiOutlineArrowRight />
                  </div>
                </div>
                <div className="flex gap-4 justify-between text-[#586861] w-full text-3xl">
                  <h1 className="lg:text-8xl text-5xl font-medium uppercase">
                    lofts
                  </h1>
                </div>
              </div>
              <div className="flex items-center gap-6 lg:gap-32 flex-col lg:flex-row">
                <div className="w-full">
                  <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80" />
                </div>
                <div className="lg:w-9/12">
                  <div className="flex flex-col gap-6 lg:gap-16">
                    <p className="text-2xl text-left">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ducimus fugiat qui velit laboriosam quae laudantium nisi
                      facere voluptatibus corrupti modi.
                    </p>
                    <div className="text-left mx-auto lg:mx-0">
                      <p>
                        <BiArea className="inline text-xl mr-3" />{" "}
                      </p>
                      <p>
                        <BiBed className="inline text-xl mr-3" /> 2
                      </p>
                      <p>
                        <BiBath className="inline text-xl mr-3" /> 2
                      </p>
                    </div>
                    <button className="p-3 mx-auto w-full lg:mx-0 text-sm hover:bg-gray-500 hover:text-white uppercase bg-white text-gray-700 border lg:w-48">
                      See A virtual tour
                    </button>
                  </div>
                  {/* <div className="my-custom-pagination-div text-center mt-10" /> */}
                </div>
              </div>
              <h1 className="lg:my-4">
                Furnished in partnership with{" "}
                <span className="uppercase font-medium ml-4">
                  Monarc<span className="font-thin">mart</span>
                </span>
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
SwiperCore.use([Autoplay]);

export default Slider;
