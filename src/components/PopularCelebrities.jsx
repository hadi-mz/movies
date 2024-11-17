// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation } from 'swiper/modules';
// import Skeleton from 'react-loading-skeleton';
// import { MdKeyboardArrowRight } from 'react-icons/md';

// const PopularCelebritiesSlider = () => {
//   const [celebrities, setCelebrities] = useState([]);
//   const [loading, setLoading] = useState(true);




// return (
//   <div className="flex flex-col items-center p-4  text-black">

//     <div className="flex items-center gap-2 group cursor-pointer w-11/12">
//       <span className="border-e-8 h-8 rounded-full border-[#E91E63] transition-transform duration-300 group-hover:hidden">
//       </span>
//       <h2 className="text-xl lg:text-2xl font-bold text-black transition-transform duration-300 group-hover:scale-110">
//       Most popular celebrities
//               </h2>
//       <MdKeyboardArrowRight
//         size={30}
//         className="text-[#E91E63] opacity-0 transition-opacity duration-300 transform group-hover:opacity-100 group-hover:scale-125"
//       />
//     </div>
//     {loading ? (
//       <div className="flex space-x-4 overflow-hidden">
//         {Array.from({ length: 6 }).map((_, index) => (
//           <div key={index} className=" flex flex-col items-center space-y-4">
//             <div className="w-24 h-24 rounded-full bg-gray-700"></div>
//             <div className="h-4 w-16 bg-gray-700 rounded"></div>
//           </div>
//         ))}
//       </div>
//     ) : (
//       <Swiper
//         modules={[Navigation]}
//         slidesPerView={2}
//         spaceBetween={10}
//         navigation
//         breakpoints={{
//           640: {
//             slidesPerView: 3,
//             spaceBetween: 10,
//           },
//           768: {
//             slidesPerView: 4,
//             spaceBetween: 15,
//           },
//           1024: {
//             slidesPerView: 6,
//             spaceBetween: 0,
//           },
//         }}
//         className="w-11/12 mt-8"
//       >
//         {loading ? (
//           Array.from({ length: 6 }).map((_, index) => (
//             <SwiperSlide key={index} className="flex flex-col items-center">
//               <Skeleton circle={true} height="300px" baseColor='gray' width="300px" />
//               <Skeleton width={80} height={20} className="mt-2" />
//             </SwiperSlide>
//           ))
//         ) : (
//           celebrities.map((celebrity) => (
//             <SwiperSlide key={celebrity.rank} className="flex flex-col items-center">
//               <div className="relative">
//                 <img
//                   src={celebrity.image}
//                   alt={celebrity.name}
//                   className="w-44 h-44 rounded-full object-cover"
//                 />
//                 <div className="absolute bottom-0 right-12 bg-[#950000] px-3 py-2 text-white text-xs font-semibold rounded-full">
//                   {celebrity.rank}
//                 </div>
//               </div>
//               <div className="w-full flex items-center">
//                 <span className="mt-2 w-full text-center text-sm font-medium">
//                   {celebrity.name}
//                 </span>
//               </div>
//             </SwiperSlide>
//           ))
//         )}
//       </Swiper>

//     )}
//   </div>
// );
// };

// export default PopularCelebritiesSlider;





import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularCelebrities } from '../redux/slices/Explore/ExplorePopularCelebrities';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';
import { Navigation } from 'swiper/modules';

const PopularCelebritiesSlider = () => {
  const dispatch = useDispatch();
  const { data: celebrities, loading } = useSelector((state) => state.celebrities);

  useEffect(() => {
    dispatch(fetchPopularCelebrities());
  }, [dispatch]);




  return (
    <div className="flex flex-col items-center p-4  text-black">

      <div className="flex items-center gap-2 group cursor-pointer w-11/12">
        <span className="border-e-8 h-8 rounded-full border-[#E91E63] transition-transform duration-300 group-hover:hidden">
        </span>
        <h2 className="text-xl lg:text-2xl font-bold text-black transition-transform duration-300 group-hover:scale-110">
          Most popular celebrities
        </h2>
        <MdKeyboardArrowRight
          size={30}
          className="text-[#E91E63] opacity-0 transition-opacity duration-300 transform group-hover:opacity-100 group-hover:scale-125"
        />
      </div>
      {loading ? (
        <div className="flex space-x-4 overflow-hidden">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className=" flex flex-col items-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-gray-700"></div>
              <div className="h-4 w-16 bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <Swiper
          modules={[Navigation]}
          slidesPerView={2}
          spaceBetween={10}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
          }}
          className="w-11/12 mt-8"
        >
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <SwiperSlide key={index} className="flex flex-col items-center">
                <Skeleton circle={true} height="300px" baseColor='gray' width="300px" />
                <Skeleton width={80} height={20} className="mt-2" />
              </SwiperSlide>
            ))
          ) : (
            celebrities.map((celebrity) => (
              <SwiperSlide key={celebrity.rank} className="flex flex-col items-center">
                <div className="relative">
                  <img
                    src={celebrity.image}
                    alt={celebrity.name}
                    className="w-44 h-44 rounded-full object-cover"
                  />
                  <div className="absolute bottom-0 right-12 bg-[#950000] px-3 py-2 text-white text-xs font-semibold rounded-full">
                    {celebrity.rank}
                  </div>
                </div>
                <div className="w-full flex items-center">
                  <span className="mt-2 w-full text-center text-sm font-medium">
                    {celebrity.name}
                  </span>
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>

      )}
    </div>
  );
};

export default PopularCelebritiesSlider;
