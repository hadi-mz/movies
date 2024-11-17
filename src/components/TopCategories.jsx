import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';  // وارد کردن framer-motion
import categoryImg1 from "../assets/images/topcategories/Bitmap(1).png";
import categoryImg2 from "../assets/images/topcategories/Bitmap.png";
import categoryImg3 from "../assets/images/topcategories/Frame 2(1).png";
import categoryImg4 from "../assets/images/topcategories/Frame 2(2).png";
import categoryImg5 from "../assets/images/topcategories/Frame 2(3).png";
import categoryImg6 from "../assets/images/topcategories/Frame 2(4).png";

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
                        <motion.p
                            className='text-black font-bold text-3xl md:text-4xl'
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Top <br />
                            <span className='text-blue-600 font-bold text-4xl md:text-5xl'>
                                Categories
                            </span>
                        </motion.p>
                    </div>
                    <div className='w-full md:w-6/12 flex flex-wrap md:gap-4'>
                        {isLoading ? (
                            <div>
                                <ImageSkeletonLoader width="100%" height="150px" />
                                <ImageSkeletonLoader width="100%" height="150px" />
                            </div>
                        ) : (
                            <motion.div
                                className='flex flex-row gap-4 lg:flex-nowrap md:flex-nowrap flex-wrap'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <motion.img
                                    src={categoryImg6}
                                    className='w-full md:w-1/2'
                                    alt=""
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{ scale: 1.1 }} // انیمیشن در حالت هاور
                                />
                                <motion.img
                                    src={categoryImg5}
                                    className='w-full md:w-1/2'
                                    alt=""
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{ scale: 1.1 }} // انیمیشن در حالت هاور
                                />
                            </motion.div>
                        )}
                    </div>
                </div>

                <div className='w-full flex flex-col md:flex-row justify-between gap-4'>
                    <div className='flex flex-col gap-4 w-full md:w-6/12'>
                        <div className='relative'>
                            {isLoading ? (
                                <ImageSkeletonLoader width="100%" height="200px" />
                            ) : (
                                <motion.img
                                    src={categoryImg3}
                                    width="100%"
                                    alt=""
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    whileHover={{ opacity: 0.8 }} // تغییر شفافیت در حالت هاور
                                />
                            )}
                        </div>

                        <div className='flex flex-col md:flex-row gap-4'>
                            {isLoading ? (
                                <>
                                    <ImageSkeletonLoader width="100%" height="150px" />
                                    <ImageSkeletonLoader width="100%" height="150px" />
                                </>
                            ) : (
                                <motion.div
                                    className='flex flex-row gap-4 flex-wrap md:flex-nowrap lg:flex-nowrap'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <motion.img
                                        src={categoryImg1}
                                        className='w-full md:w-1/2'
                                        alt=""
                                        initial={{ scale: 0.8 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        whileHover={{ scale: 1.1 }} // انیمیشن در حالت هاور
                                    />
                                    <motion.img
                                        src={categoryImg4}
                                        className='w-full md:w-1/2'
                                        alt=""
                                        initial={{ scale: 0.8 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        whileHover={{ scale: 1.1 }} // انیمیشن در حالت هاور
                                    />
                                </motion.div>
                            )}
                        </div>
                    </div>

                    <div className='w-full md:w-6/12 relative'>
                        {isLoading ? (
                            <ImageSkeletonLoader width="100%" height="300px" />
                        ) : (
                            <motion.img
                                src={categoryImg2}
                                width="100%"
                                alt=""
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                whileHover={{ opacity: 0.8 }} // تغییر شفافیت در حالت هاور
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
