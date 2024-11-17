
import React from 'react';
import bgLine from "../assets/images/Explore/TrendingMoviesSection/bg.png"
const GreenLines = () => {
       return (
        <div className='w-full flex justify-center items-en lg:h-[450px] max-sm:h-[350px] absolute'>
            <div className=" flex justify-center items-end w-11/12 relative">
                <div className="flex gap-1 w-full justify-center items-end">
                   <img src={bgLine} alt="" />
                </div>
            </div>
        </div>
    );
};

export default GreenLines;
