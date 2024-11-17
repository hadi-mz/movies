import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function PricingPlanCarousel() {
     const plans = [
        {
            title: "BASIC",
            price: "FREE",
            features: [
                "Lorem ipsum dolor s",
                "Lorem ipsum dolor sit amet",
                "non, ipsum sit amet",
                "Lorem ipsum dolor sit amet",
            ],
            loremText: "Lorem KDancckldac get jdn akjsdnw dbbdf ihdocjbsKJDF lklkdclnc jndosa uibjq wfbscij oqwfhs",

            highlight: false,
            btntitleblue: true,
            colorW: false,
        },
        {
            title: "BEST VALUE",
            price: "$25",
            features: [
                "Lorem ipsum dolor s",
                "Lorem ipsum dolor sit amet",
                "non, ipsum sit amet",
                "Lorem ipsum dolor sit amet",
            ],
            loremText: "Lorem KDancckldac get jdn akjsdnw dbbdf ihdocjbsKJDF lklkdclnc jndosa uibjq wfbscij oqwfhs",

            highlight: true,
            btntitleblue: false,
            colorW: true,

        },
        {
            title: "PRO",
            price: "$54",
            features: [
                "Lorem ipsum dolor s",
                "Lorem ipsum dolor sit amet",
                "non, ipsum sit amet",
                "Lorem ipsum dolor sit amet",
            ],
            loremText: "Lorem KDancckldac get jdn akjsdnw dbbdf ihdocjbsKJDF lklkdclnc jndosa uibjq wfbscij oqwfhs",

            highlight: false,
            btntitleblue: false,
            colorW: false,

        },
        {
            title: "ENTERPRICE",
            price: "$99",
            features: [
                "Lorem ipsum dolor s",
                "Lorem ipsum dolor sit amet",
                "non, ipsum sit amet",
                "nosit amet",
                "Lorem ipsum dolor sit amet",
            ],
            loremText: "Lorem KDancckldac get jdn akjsdnw dbbdf ihdocjbsKJDF lklkdclnc jndosa uibjq wfbscij oqwfhs",
            highlight: false,
            btntitleblue: false,
            colorW: false,

        },
    ];

    return (
        <div className=" flex flex-col items-center justify-center overflow-hidden  p-10 lg:mt-5 mt-0 text-gray-700 md:p-20 ">
            <svg className="absolute overflow-hidden h-full w-full max-w-full" width="1444" height="690" viewBox="0 0 1444 690" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1398.61 629.726C1398.61 629.726 1159.03 566.579 903.32 666.285C647.606 765.991 586.578 519.052 390.127 519.052C193.677 519.052 86.7511 629.726 86.7511 629.726L7.10487e-05 179.553C7.10487e-05 179.553 71.8722 108.097 319.264 17.5311C566.655 -73.0352 789.333 216.777 1003.44 216.777C1217.54 216.777 1444 2.2428 1444 2.2428L1398.61 629.726Z" fill="#304FFE" fill-opacity="0.05" />
            </svg>
            <div className="w-full flex flex-col items-center">
                <h2 className="text-2xl text-center lg:text-4xl text-black font-bold">Flexible</h2>
                <h2 className="text-2xl text-center lg:text-4xl text-blue-500 font-bold mt-1">Pricing And Plan</h2>
            </div>

            <div className="w-full mt-8 lg:p-4 p-0">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="swiper-container"
                >
                    {plans.map((plan, index) => (
                        <SwiperSlide key={index} className='px-1 '>
                            <div className={`flex border w-full lg:pb-0 pb-12 flex-col overflow-hidden bg-white rounded-2xl shadow-lg ${plan.highlight ? 'shadow-pink-400 border-2 border-pink-500' : 'shadow-gray-400'}`}>
                                <div className={`flex flex-col items-center ${plan.highlight ? 'p-8 py-14 bg-gradient-to-br from-pink-500 to-blue-500' : 'p-4'}`}
                                    style={{
                                        clipPath: plan.highlight ? 'ellipse(70% 80% at 50% 0%)' : 'ellipse(100% 80% at 50% 0%)',
                                    }}

                                >
                                    <span className={`font-semibold ${plan.colorW ? 'text-white' : 'text-pink-500'} text-xl lg:text-3xl`}>
                                        {plan.title}
                                    </span>
                                    <div className="flex items-center">
                                        <span className={`lg:text-2xl text-lg mt-4 font-black ${plan.highlight ? 'text-white' : 'text-black'}`}>
                                            {plan.price}
                                        </span>
                                    </div>
                                </div>
                                <div className="px-4  flex flex-col items-center">
                                    <ul className='flex flex-col pb-2'>
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className='lg:font-medium font-normal lg:text-sm text-xs border-dashed border-b border-gray-600 pb-2 text-center'>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className='lg:text-[8px] text-[8px] w-10/12 text-center mt-2 '>{plan.loremText}</p>
                                </div>
                                <div className="flex flex-row items-center py-4 justify-center">
                                    <button className={`flex items-center justify-center lg:py-3 lg:px-12 py-1.5 px-8  rounded-full lg:text-sm text-xs uppercase ${plan.btntitleblue ? " bg-blue-600" : "bg-pink-600"} text-white font-medium`}>
                                        CHOOSE PLAN
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
