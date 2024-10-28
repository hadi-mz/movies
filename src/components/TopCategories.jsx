// import React, { useEffect, useState } from 'react';
// import categoryImg1 from "../assets/images/topcategories/Bitmap(1).png";
// import categoryImg2 from "../assets/images/topcategories/Bitmap.png";
// import categoryImg3 from "../assets/images/topcategories/Frame 2(1).png";
// import categoryImg4 from "../assets/images/topcategories/Frame 2(2).png";
// import categoryImg5 from "../assets/images/topcategories/Frame 2(3).png";
// import categoryImg6 from "../assets/images/topcategories/Frame 2(4).png";

// // کامپوننت اسکلتون لودر برای تصاویر
// const ImageSkeletonLoader = ({ width, height }) => {
//     return (
//         <div
//             className={`bg-gray-300 animate-pulse `}
//             style={{ width: width }}
//         />
//     );
// };

// export default function TopCategories() {
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         // بعد از 4 ثانیه لودینگ به پایان می‌رسد
//         const timer = setTimeout(() => {
//             setIsLoading(false);
//         }, 4000);

//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <div className='w-full flex flex-col items-center'>
//             <div className='w-10/12 flex flex-col gap-4'>
//                 <div className='flex flex-row justify-between items-center'>
//                     <div className='w-6/12'>
//                         <p className='text-black font-bold text-4xl'>
//                             Top <br />
//                             <span className='text-blue-600 font-bold text-5xl'>Categories</span>
//                         </p>
//                     </div>
//                     <div className='w-6/12 flex gap-4'>
//                         {isLoading ? (
//                             <>
//                                 <ImageSkeletonLoader width="100%" />
//                                 <ImageSkeletonLoader width="100%"  />
//                             </>
//                         ) : (
//                             <>
//                                 <img src={categoryImg6} width="100%" alt="" />
//                                 <img src={categoryImg5} width="100%" alt="" />
//                             </>
//                         )}
//                     </div>
//                 </div>

//                 <div className='w-full flex flex-row justify-between gap-4'>
//                     <div className='flex flex-col gap-4'>
//                         <div className='relative'>
                       
//                             {isLoading ? (
//                                 <ImageSkeletonLoader width="100%"  />
//                             ) : (
//                                 <img src={categoryImg3} width="100%" alt="" />
//                             )}
//                         </div>

//                         <div className='flex flex-row gap-4'>
//                             {isLoading ? (
//                                 <>
//                                     <ImageSkeletonLoader width="100%"  />
//                                     <ImageSkeletonLoader width="100%"  />
//                                 </>
//                             ) : (
//                                 <>
//                                     <img src={categoryImg1} width="100%" alt="" />
//                                     <img src={categoryImg4} width="100%" alt="" />
//                                 </>
//                             )}
//                         </div>
//                     </div>

//                     <div className='relative'>
                        
//                         {isLoading ? (
//                             <ImageSkeletonLoader width="100%"  />
//                         ) : (
//                             <img src={categoryImg2} width="100%" alt="" />
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


 



import React, { useEffect, useState } from 'react';
import categoryImg1 from "../assets/images/topcategories/Bitmap(1).png";
import categoryImg2 from "../assets/images/topcategories/Bitmap.png";
import categoryImg3 from "../assets/images/topcategories/Frame 2(1).png";
import categoryImg4 from "../assets/images/topcategories/Frame 2(2).png";
import categoryImg5 from "../assets/images/topcategories/Frame 2(3).png";
import categoryImg6 from "../assets/images/topcategories/Frame 2(4).png";

// کامپوننت اسکلتون لودر برای تصاویر
const ImageSkeletonLoader = ({ width, height }) => {
    return (
        <div className={`bg-gray-300 animate-pulse`} style={{ width: width, height: height }} />
    );
};

export default function TopCategories() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
         const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='w-full flex flex-col items-center lg:-mt-14 -mt-52'>
            <div className='w-10/12 flex flex-col gap-4'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='w-full md:w-6/12 text-center md:text-left pb-8 lg:pb-0'>
                        <p className='text-black font-bold text-3xl md:text-4xl'>
                            Top <br />
                            <span className='text-blue-600 font-bold text-4xl md:text-5xl'>Categories</span>
                        </p>
                    </div>
                    <div className='w-full md:w-6/12 flex flex-wrap md:gap-4'>
                        {isLoading ? (
                            <div>
                                <ImageSkeletonLoader width="100%" height="150px" />
                                <ImageSkeletonLoader width="100%" height="150px" />
                            </div>
                        ) : (
                            <div className='flex flex-row gap-4 lg:flex-nowrap md:flex-nowrap flex-wrap'>
                                <img src={categoryImg6} className='w-full md:w-1/2' alt="" />
                                <img src={categoryImg5} className='w-full md:w-1/2' alt="" />
                            </div>
                        )}
                    </div>
                </div>

                <div className='w-full flex flex-col md:flex-row justify-between gap-4'>
                    <div className='flex flex-col gap-4 w-full md:w-6/12'>
                        <div className='relative'>
                            {isLoading ? (
                                <ImageSkeletonLoader width="100%" height="200px" />
                            ) : (
                                <img src={categoryImg3} width="100%" alt="" />
                            )}
                        </div>

                        <div className='flex flex-col md:flex-row gap-4'>
                            {isLoading ? (
                                <>
                                    <ImageSkeletonLoader width="100%" height="150px" />
                                    <ImageSkeletonLoader width="100%" height="150px" />
                                </>
                            ) : (
                                <div className='flex flex-row gap-4 flex-wrap md:flex-nowrap lg:flex-nowrap'>
                                    <img src={categoryImg1} className='w-full md:w-1/2' alt="" />
                                    <img src={categoryImg4} className='w-full md:w-1/2' alt="" />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='w-full md:w-6/12 relative'>
                        {isLoading ? (
                            <ImageSkeletonLoader width="100%" height="300px" />
                        ) : (
                            <img src={categoryImg2} width="100%" alt="" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
