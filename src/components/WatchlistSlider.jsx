import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist, removeFromWatchlist } from "../redux/slices/Explore/ExploreWatchlistSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaBookmark, FaPlay } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { AiFillStar } from "react-icons/ai";
import { CgRemove } from "react-icons/cg";

const WatchlistSlider = () => {
    const dispatch = useDispatch();
    const watchlist = useSelector((state) => state.exploreWatchlist.watchlist);  
    const [movies, setMovies] = useState(watchlist);
    const [hoveredItem, setHoveredItem] = useState(null); // وضعیت هاور برای تغییر متن و آیکن

    useEffect(() => {
        setMovies(watchlist);
    }, [watchlist]);

    const handleAddToWatchlist = (movie) => {
        const isMovieInWatchlist = watchlist.some((item) => item.title === movie.title);

        if (isMovieInWatchlist) {
            dispatch(removeFromWatchlist(movie.title));
        } else {
            dispatch(addToWatchlist(movie));
        }
    };

    return (
        <div className="p-4 mx-auto mt-4 w-full lg:w-11/12">
            <div className="flex flex-col lg:flex-row-reverse items-start lg:items-center justify-between mb-4 gap-4">
                <div className="w-full lg:w-3/12 bg-gray-200 rounded mb-4 lg:mb-0">
                    <div className="flex items-center gap-1 p-2">
                        <h3 className="text-sm font-normal text-blue-500">Ad</h3>
                    </div>
                    <img
                        src="https://media.giphy.com/media/3o6MbmV6eA4pC3Zr2A/giphy.gif"
                        alt="Advertisement"
                        className="w-full h-auto"
                    />
                </div>

                <div className="w-full lg:w-9/12">
                    <p className="text-gray-400 mb-4 text-sm lg:text-base">
                        Movies and TV shows that you have watchlisted
                    </p>
                    <div className="flex items-center gap-1 cursor-pointer group">
                        <div className="flex items-center gap-2">
                            <h2 className="text-xl lg:text-2xl font-bold text-black">
                                From your Watchlist
                            </h2>
                        </div>
                    </div>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1.5}
                        className="w-full max-sm:mt-2 mt-4"
                        breakpoints={{
                            640: { slidesPerView: 2.5 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                    >
                        {movies.length > 0 ? (
                            movies.map((movie, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg relative">
                                        <img
                                            src={movie.image}
                                            alt={movie.title}
                                            className="w-full h-48 sm:h-64 object-cover"
                                        />
                                        <div className="absolute top-2 left-2 bg-yellow-500 p-2 rounded-full">
                                            <FaBookmark />
                                        </div>
                                        <div className="p-3 py-4">
                                            <div className="flex items-center mb-2">
                                                <AiFillStar className="text-yellow-400 mr-1" />
                                                <span className="text-xs font-bold">{movie.voteAverage}</span>
                                            </div>
                                            <h3 className="text-sm font-semibold">{movie.title}</h3>
                                            <div className="flex flex-col justify-center items-center mt-4 gap-2">
                                                <button
                                                    onClick={() => handleAddToWatchlist(movie)}
                                                    onMouseEnter={() => setHoveredItem(movie.title)} // وضعیت هاور را تغییر می‌دهد
                                                    onMouseLeave={() => setHoveredItem(null)} // هنگام خارج شدن موس وضعیت هاور را برمی‌گرداند
                                                    className="mt-2 flex items-center gap-2 max-sm:gap-0 text-lg bg-blue-400 text-white max-sm:px-1 max-sm:py-0.5 max-sm:text-sm px-4 py-1.5 rounded-lg hover:text-blue-700 transition-colors group"
                                                >
                                                    {watchlist.some((item) => item.title === movie.title) && hoveredItem === movie.title ? (
                                                        <>
                                                            <CgRemove size={20} color="red" />
                                                            <p className="text-xs group-hover:text-red-500">Remove Item</p>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <TiTick size={20} />
                                                            <p className="text-xs group-hover:text-red-500">In Watchlist</p>
                                                        </>
                                                    )}
                                                </button>
                                                <button className="text-white font-normal mt-2">
                                                    <span className="flex items-center gap-2">
                                                        <FaPlay />
                                                        Trailer
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        ) : (
                            <div>No movies in your watchlist.</div>
                        )}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default WatchlistSlider;
