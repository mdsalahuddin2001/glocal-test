"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules

import Image from "next/image";

import { Navigation, Autoplay, Pagination } from "swiper/modules";
const TestimonialSlider = () => {
  return (
    <div className="testimonialSlider">
      <div className="relative">
        <div className="testimonial-slider-prev border-[1px] border-solid border-[#003D2B] text-[#000000] rounded-[50px] p-2 md:p-[12px] flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-0 hover:bg-primary hover:text-white duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <div className="testimonial-slider-next border border-[#003D2B]   text-[#000000] rounded-[50px] p-2  md:p-[12px] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-0 hover:bg-primary hover:text-white duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
        <div className="container px-[35px]">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            loop={true}
            className="max-w-[85%]  sm:max-w-[90%] md:max-w-[95%]"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".testimonial-slider-pagination",
            }}
            spaceBetween={21}
            slidesPerView={1}
            speed={1500}
            navigation={{
              nextEl: ".testimonial-slider-next",
              prevEl: ".testimonial-slider-prev",
            }}
            breakpoints={{
              768: {
                // width: 768,
                slidesPerView: 2,
              },
              1024: {
                // width: 768,
                slidesPerView: 3,
              },
              1280: {
                // width: 1280,
                slidesPerView: 3,
              },
              1319: {
                // width: 1319,
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <div className=" bg-[#fff]  border-solid border-[1px] border-[#000] py-4 md:py-12 px-1 lg:px-3">
                <h1 className=" text-center text-[20px]  font-medium text-[#000] leading-[28px]">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique."
                </h1>
                <div className="text-center pt-[32px]">
                  <Image
                    src="/assets/Avatar Image.svg"
                    width={56}
                    height={56}
                    alt="no image"
                    className="mx-auto"
                  />
                  <h2 className="text-[#000] pt-[16px] font-Roboto text-[16px] leading-[24px] font-semibold">
                    Name Surname
                  </h2>
                  <h3 className="text-[#000] font-Roboto text-[16px] leading-[24px] font-normal">
                    Position, Company name
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" bg-[#fff]  border-solid border-[1px] border-[#000] py-4 md:py-12 px-1 lg:px-3">
                <h1 className=" text-center text-[20px]  font-medium text-[#000] leading-[28px]">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique."
                </h1>
                <div className="text-center pt-[32px]">
                  <Image
                    src="/assets/Avatar Image.svg"
                    width={56}
                    height={56}
                    alt="no image"
                    className="mx-auto"
                  />
                  <h2 className="text-[#000] pt-[16px] font-Roboto text-[16px] leading-[24px] font-semibold">
                    Name Surname
                  </h2>
                  <h3 className="text-[#000] font-Roboto text-[16px] leading-[24px] font-normal">
                    Position, Company name
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" bg-[#fff]  border-solid border-[1px] border-[#000] py-4 md:py-12 px-1 lg:px-3">
                <h1 className=" text-center text-[20px]  font-medium text-[#000] leading-[28px]">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique."
                </h1>
                <div className="text-center pt-[32px]">
                  <Image
                    src="/assets/Avatar Image.svg"
                    width={56}
                    height={56}
                    alt="no image"
                    className="mx-auto"
                  />
                  <h2 className="text-[#000] pt-[16px] font-Roboto text-[16px] leading-[24px] font-semibold">
                    Name Surname
                  </h2>
                  <h3 className="text-[#000] font-Roboto text-[16px] leading-[24px] font-normal">
                    Position, Company name
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" bg-[#fff]  border-solid border-[1px] border-[#000] py-4 md:py-12 px-1 lg:px-3">
                <h1 className=" text-center text-[20px]  font-medium text-[#000] leading-[28px]">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique."
                </h1>
                <div className="text-center pt-[32px]">
                  <Image
                    src="/assets/Avatar Image.svg"
                    width={56}
                    height={56}
                    alt="no image"
                    className="mx-auto"
                  />
                  <h2 className="text-[#000] pt-[16px] font-Roboto text-[16px] leading-[24px] font-semibold">
                    Name Surname
                  </h2>
                  <h3 className="text-[#000] font-Roboto text-[16px] leading-[24px] font-normal">
                    Position, Company name
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" bg-[#fff]  border-solid border-[1px] border-[#000] py-4 md:py-12 px-1 lg:px-3">
                <h1 className=" text-center text-[20px]  font-medium text-[#000] leading-[28px]">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique."
                </h1>
                <div className="text-center pt-[32px]">
                  <Image
                    src="/assets/Avatar Image.svg"
                    width={56}
                    height={56}
                    alt="no image"
                    className="mx-auto"
                  />
                  <h2 className="text-[#000] pt-[16px] font-Roboto text-[16px] leading-[24px] font-semibold">
                    Name Surname
                  </h2>
                  <h3 className="text-[#000] font-Roboto text-[16px] leading-[24px] font-normal">
                    Position, Company name
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" bg-[#fff]  border-solid border-[1px] border-[#000] py-4 md:py-12 px-1 lg:px-3">
                <h1 className=" text-center text-[20px]  font-medium text-[#000] leading-[28px]">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique."
                </h1>
                <div className="text-center pt-[32px]">
                  <Image
                    src="/assets/Avatar Image.svg"
                    width={56}
                    height={56}
                    alt="no image"
                    className="mx-auto"
                  />
                  <h2 className="text-[#000] pt-[16px] font-Roboto text-[16px] leading-[24px] font-semibold">
                    Name Surname
                  </h2>
                  <h3 className="text-[#000] font-Roboto text-[16px] leading-[24px] font-normal">
                    Position, Company name
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="testimonial-slider-pagination   items-center  justify-center flex mt-6 md:mt-8 lg:mt-[42px]" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
