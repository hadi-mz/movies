import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlay, FaPlus } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { Autoplay } from 'swiper/modules';
import { TiStarFullOutline } from 'react-icons/ti';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import { fetchHeaderExplore } from '../redux/slices/Explore/ExploreHeaderSlice';
import Searchbar from './Searchbar';

export default function ExploreHeader() {
    const dispatch = useDispatch();
    const { movies, loading } = useSelector((state) => state.HeaderExplore);
    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        dispatch(fetchHeaderExplore());
    }, [dispatch]);

    useEffect(() => {
        if (movies.length > 0) {
            setBackgroundImage(movies[5]?.image);
        }
    }, [movies]);

    const handleCardClick = (image) => {
        setBackgroundImage(image);
    };

    const backgroundData = movies.find(movie => movie.image === backgroundImage);
    const genreMap = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Science Fiction",
        10770: "TV Movie",
        53: "Thriller",
        10752: "War",
        37: "Western",
        10759: "Action & Adventure",
        10762: "Kids",
        10763: "News",
        10764: "Reality",
        10765: "Sci-Fi & Fantasy",
        10766: "Soap",
        10767: "Talk",
        10768: "War & Politics"
    };
    const convertGenre = (genreIds) => {
        return genreIds.map(id => genreMap[id]).filter(Boolean).join(', ');
    };

    return (
        <div className="relative">
            <header
                className="relative bg-cover bg-center transition-all duration-500 ease-in-out flex flex-col justify-end"
                style={{
                    backgroundImage: `url(${loading ? '' : backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                             <div className="h-full mt-16 flex flex-col justify-center items-center text-white bg-black bg-opacity-35 pb-28 md:pb-36 max-sm:pb-44"
                    style={{
                        clipPath: 'ellipse(100% 80% at 50% 0%)',
                    }}
                >
                    <div className="text-white px-6 rounded-lg w-full">
                        <h2 className="text-2xl font-bold">
                            {loading ? <Skeleton width="100px" baseColor='gray' /> : backgroundData?.title}
                        </h2>
                        <p className="mt-2 lg:text-gray-300 text-white w-8/12 md:w-10/12 max-sm:w-11/12 lg:text-lg max-sm:text-xs">{loading ? <Skeleton className='w-11/12 h-32' baseColor='gray' /> : backgroundData?.overview}</p>
                        <div className="w-full flex flex-col lg:flex-row items-center gap-4">
                            <div className="flex lg:flex-row max-sm:flex-col max-sm:items-start items-center max-sm:justify-start w-full lg:w-5/12 mt-8 gap-4 ">
                                <div className="flex flex-row lg:flex-col gap-3 items-center max-sm:items-start">
                                    <span className="text-sm bg-gray-800 py-1 px-2 rounded font-bold flex flex-wrap">
                                        {loading ? <Skeleton width="60px" baseColor='gray' /> : convertGenre(backgroundData?.genreIds || [])}
                                    </span>
                                    <span className="text-sm text-gray-400">themoviedb</span>
                                </div>
                                <div className="flex flex-col max-sm:flex-row gap-3 items-center">
                                    <span className="text-xl bg-gray-800 py-1 px-2 rounded font-bold">Thriller</span>
                                    <span className="text-sm text-gray-400">{loading ? <Skeleton baseColor='gray' /> : Math.floor(backgroundData?.runtime / 60)} h {backgroundData?.runtime % 60} min</span>
                                </div>
                                <div className='flex flex-col max-sm:flex-row gap-4'>
                                    <span className="text-sm bg-gray-600 text-white py-1 px-2 w-full text-center  rounded">16+</span>
                                    <span className='flex flex-row items-center gap-1'>
                                        <TiStarFullOutline size={20} />
                                        <p className='text-xs'>{loading ? <Skeleton baseColor='gray' width="40px" /> : backgroundData?.voteAverage}</p>
                                    </span>
                                </div>
                                <span className='border-e-2 h-8 border-white hidden lg:flex'></span>
                            </div>
                            <div className="flex flex-row max-sm:flex-col max-sm:gap-4 max-sm:justify-start md:justify-between lg:items-center max-sm:items-start w-full lg:w-6/12 justify-between mt-6">
                                <div className="flex gap-4 items-center">
                                    <button className="flex items-center text-white border-b-2 border-[#950000] py-1 text-xs lg:py-2 lg:text-lg font-semibold">
                                        <FaPlus size={25} className="mr-2 border rounded-full" /> Add to watchlist
                                    </button>
                                    <button className="flex items-center text-white py-1 lg:py-2 border-2 px-4 lg:px-6 lg:text-lg text-xs border-[#950000] pb-1 font-semibold">
                                        <MdOutlineOndemandVideo size={25} className="lg:mr-2 mr-3" /> Watch Trailer
                                    </button>
                                </div>
                                <button className="flex items-center bg-[#950000] py-2 lg:px-4 px-3 rounded font-black lg:text-lg text-xs text-white">
                                    <FaPlay className="mr-2" /> Watch Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" lg:w-8/12 max-sm:w-11/12 flex justify-center ">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={20}
                        autoplay={{ delay: 3000, pauseOnMouseEnter:true }}
                        centeredSlides={true}

                        modules={[Autoplay]}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 6 },
                        }}
                    >
                        {movies.map((movie, index) => (
                            <SwiperSlide
                                key={index}
                                onClick={() => handleCardClick(movie?.image)}
                                className={`transition-transform duration-500 ${index === movies.length - 1 ? 'scale-75' : 'scale-90'
                                    } hover:scale-100`}
                            >
                                <div className="cursor-pointer transform transition-transform hover:scale-105 rounded-lg overflow-hidden">
                                    <img
                                        src={loading ? <Skeleton baseColor='gray' width="300px" height="350px" /> : movie?.image}
                                        alt={movie?.title}
                                        className="rounded-lg shadow-lg w-[200px] h-[200px] object-cover"
                                    />
                                    <div className="text-center mt-2">
                                        <h2 className="font-semibold text-xs text-white">{loading ? <Skeleton baseColor='gray' width="40px" /> : movie?.title}</h2>
                                        <p className="text-xs text-[#E91E63]">{movie?.releaseDate}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
                <Searchbar />
            </header>
        </div>
    );
}


 