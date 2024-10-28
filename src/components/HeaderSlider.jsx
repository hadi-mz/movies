import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoStar } from 'react-icons/io5';
import SliderImage from "../assets/images/headerSlider/sliderBG.png";
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Autoplay } from 'swiper/modules';

export default function HeaderSlider() {
  const swiperRef = useRef(null);

  const slides = [
    {
      title: "The Lorem Ipsum, Dolor Sit Amet",
      description: "Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci.",
    },
    {
      title: "The Lorem Ipsum Dolor Sit Amet",
      description: "Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci.",
    },
  ];

  return (
    <div className="relative flex justify-center bottom-64  lg:bottom-72 md:bottom-40 items-end w-full min-h-[60vh] lg:min-h-[80vh] pb-10 lg:pb-16">
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        loop={true}
        modules={[Autoplay]}
        className="w-[90%] md:w-[90%] lg:w-[80%] xl:w-[65%] shadow-lg rounded-3xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative ">
              <div className="bubble bg-blue-200 rounded-full opacity-10 w-24 h-24 absolute hidden md:block" style={{ top: '10%', left: '5%' }} />
              <div className="bubble bg-green-200 rounded-full opacity-15 w-16 h-16 absolute hidden md:block" style={{ top: '90%', left: '80%' }} />
              <div className="bubble bg-yellow-200 rounded-full opacity-20 w-28 h-28 absolute hidden md:block" style={{ top: '40%', left: '15%' }} />
              <div className="bubble bg-red-200 rounded-full opacity-30 w-20 h-20 absolute hidden md:block" style={{ top: '70%', left: '35%' }} />
              <div className="bubble bg-purple-200 rounded-full opacity-10 w-12 h-12 absolute hidden md:block" style={{ top: '15%', right: '10%' }} />
              <div className="bubble bg-pink-200 rounded-full opacity-25 w-32 h-32 absolute hidden md:block" style={{ bottom: '5%', right: '5%' }} />
              <div className="bubble bg-teal-200 rounded-full opacity-15 w-24 h-24 absolute hidden md:block" style={{ bottom: '25%', right: '30%' }} />
              <div className="flex flex-col md:flex-row p-4 md:p-8 gap-4 items-start justify-around w-full rounded-3xl bg-gradient-to-r from-blue-50 via-pink-50 to-purple-50">
                <div className="px-4 md:px-8 flex flex-col h-full w-full md:w-7/12">
                  <p className="text-black text-lg md:text-xl mt-2">Vivamus sit amet</p>
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mt-2 md:mt-4">{slide.title}</h2>
                  <div className="flex items-center gap-2 mt-4 text-black my-2 w-full">
                    {[...Array(5)].map((_, starIndex) => (
                      <IoStar key={starIndex} size={16} className='text-black' />
                    ))}
                    <span className="ml-2 text-xs">5.0</span>
                    <span>|</span>
                    <span className='text-xs'>2h 13m</span>
                  </div>
                  <p className="text-gray-700 font-medium mt-4 md:mt-4 ">{slide.description}</p>
                  <div className="flex gap-8 md:gap-4 mt-6 md:mt-14 w-full">
                    <button className="text-blue-600 font-semibold text-xs md:text-sm lg:text-xl">WATCH TRAILER</button>
                    <button className="bg-pink-700 text-white py-1.5
                     text-xs md:text-sm lg:text-xl  md:py-2 px-2 md:px-4 rounded-full font-semibold  ">
                      WATCH FULL MOVIE
                    </button>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full md:w-5/12 mt-4 max-sm:hidden max-md:hidden ">
                  <img src={SliderImage} className='w-full md:w-80 object-cover rounded-2xl shadow-lg shadow-slate-500 z-20' alt="Slider" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}








