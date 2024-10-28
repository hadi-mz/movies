import { useEffect, useState } from "react";
import img1 from "../assets/images/cate1/vikings.jpg";
import img2 from "../assets/images/cate1/peky.jpg";
import img3 from "../assets/images/cate1/briking.jpg";

const ImageSkeletonLoader = ({ count }) => {
    return (
        <div className="flex flex-wrap justify-center gap-6 p-4 w-full">
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className="bg-gray-300 rounded-lg w-[80%] md:w-[270px] h-64 animate-pulse shadow-lg">
                </div>
            ))}
        </div>
    );
};

const FeaturedMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(!isLoading)
            console.log(isLoading + "setTime");
        }, 5000);
    }, [])
    return (
        <div className="relative bg-white -top-80 lg:mt-0 mt-24  h-full lg:py-32">
               <svg className="absolute overflow-hidden h-full w-full max-w-full" width="1444" height="750" viewBox="0 0 1444 690" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1398.61 629.726C1398.61 629.726 1159.03 566.579 903.32 666.285C647.606 765.991 586.578 519.052 390.127 519.052C193.677 519.052 86.7511 629.726 86.7511 629.726L7.10487e-05 179.553C7.10487e-05 179.553 71.8722 108.097 319.264 17.5311C566.655 -73.0352 789.333 216.777 1003.44 216.777C1217.54 216.777 1444 2.2428 1444 2.2428L1398.61 629.726Z" fill="#E91E63" fill-opacity="0.05" />
            </svg>

            <div className="relative z-10 container mx-auto flex flex-col lg:flex-row justify-center lg:px-12 items-start space-y-8 lg:space-y-0 lg:space-x-4">

                <div className="w-full lg:w-4/12 flex justify-center lg:justify-start">
                    <div className="w-full justify-center lg:w-10/12">
                        <h2 className="text-3xl md:text-4xl text-center lg:text-left font-semibold mt-4">
                            Featured <br />
                            <span className="text-blue-500">Movies</span>
                        </h2>
                        <p className="text-black text-lg md:text-xl mt-8 text-center lg:text-left">
                            Cras convallis lacus orci, <br />
                            tristique tincidunt magna consequat in.
                        </p>
                    </div>
                </div>

                <div className="w-full lg:w-full flex flex-wrap justify-center gap-6">
                    {isLoading ? (
                        <ImageSkeletonLoader count={3} />
                    ) : (
                        [img1, img2, img3].map((img, index) => (
                            <div
                                key={index}
                                className="bg-white items-center rounded-lg w-10/12 sm:w-[80%] md:w-[270px] shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                            >
                                <img src={img} alt={`Movie ${index + 1}`} className="w-full h-72 md:h-96 object-cover" />
                                <div className="px-2 py-2">
                                    <h3 className="text-lg font-semibold text-center">Cras convallis lacus</h3>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default FeaturedMovies;
