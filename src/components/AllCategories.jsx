import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // حتما این را اضافه کنید
import '../App.css'; // Import your custom styles (if any)
import { Navigation } from 'swiper/modules';

export default function AllCategories() {
  const geners = [{ id: 1, title: "Action", },
  { id: 2, title: "Dearm", }
    , { id: 3, title: "Lovely" }
    , { id: 4, title: "Comedy" }
    , { id: 5, title: "Horror" }
    , { id: 6, title: "Fantasy" }
    , { id: 7, title: "Drama" }
    , { id: 8, title: "Documentary" }
    , { id: 9, title: "Musical" }
    , { id: 10, title: "Mystery" }
    , { id: 11, title: "Drama" }]
  return (
    <div className="w-full text-center mt-12 ">
      <h1 className="text-2xl font-bold mb-4">
        All <span className="text-blue-500">Categories</span>
      </h1>

      <Swiper
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 3.5,
          },
          768: {
            slidesPerView: 5.5,
          },
          1024: {
            slidesPerView: 6.5,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        loop={false}
        className="mySwiper mt-8 w-10/12"
      >
        {
          geners.map((h, id) => (
            <SwiperSlide key={id}>
              <div className='w-28 h-32 flex flex-col items-center'>
                <div className="h-full w-full border-2 border-b-gray-100 rounded-md rounded-lgmx-auto"></div>
                <p className='text-center text-balck font-medium mt-4'>{h.title}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
