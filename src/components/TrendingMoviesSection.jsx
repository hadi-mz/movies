
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingExplore, setTrendingType } from "../redux/slices/Explore/ExploreTrendingSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineStar, AiFillPlayCircle, AiOutlinePlus } from "react-icons/ai";
import SkeletonLoader from "./SkeletonLoader";
import { addToWatchlist } from "../redux/slices/Explore/ExploreWatchlistSlice";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { setMovieDetails } from "../redux/slices/MovieDetails/movieDetails";

const TrendingMoviesSection = ({ movie }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { trendingMovies, trendingType, loading } = useSelector((state) => state.TrendingExplore);
    const watchlist = useSelector((state) => state.exploreWatchlist.watchlist);

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    useEffect(() => {
        dispatch(fetchTrendingExplore(trendingType));
    }, [dispatch, trendingType]);

    const handleAddToWatchlist = (movie) => {
        const isMovieInWatchlist = watchlist.some((item) => item.title === movie.title);

        if (isMovieInWatchlist) {
            setAlertMessage("This movie is already in your watchlist!");
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        } else {
            dispatch(addToWatchlist(movie));
        }
    };


    const handleClick = (movie) => {
        if (!movie) return; 
        dispatch(setMovieDetails(movie));
        const slug = movie.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        console.log(slug);
        navigate(`/detailMovie/${slug}`);
    };
    

    return (
        <div className="flex flex-col items-center p-3 mt-6 text-black">
            {showAlert && (
                <motion.div layoutlayoutId="uniqueId"

                    className="
                        bg-[#950000]
                    fixed top-2 z-30 right-6 text-white lg:p-4 p-1.5 lg:rounded-lg rounded-sm lg:text-lg text-xs shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 4 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    drag
                    dragConstraints={{ left: 0, right: 300 }}
                    dragElastic={0.2}

                >
                    {alertMessage}
                </motion.div>
            )}

            <div className="w-11/12">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex flex-row gap-1 items-center">
                        <span className="border-e-8 h-8 rounded-full border-[#E91E63]"></span>
                        <h2 className="text-2xl font-bold text-black">Trending</h2>
                        <button
                            className="ml-4 px-3 py-1 text-sm text-white bg-[#950000] rounded hover:bg-red-700 transform"
                            onClick={() =>
                                dispatch(setTrendingType(trendingType === "day" ? "week" : "day"))
                            }
                        >
                            {trendingType === "day" ? "Weekly" : "Daily"}
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                        <SkeletonLoader />
                    </div>
                ) : (
                    <Swiper
                        slidesPerView={1.5}
                        spaceBetween={20}
                        breakpoints={{
                            640: { slidesPerView: 2.5 },
                            768: { slidesPerView: 4.5 },
                            1024: { slidesPerView: 6.5 },
                        }}
                    >
                        {trendingMovies.map((movie, index) => (
                            <SwiperSlide key={index} onClick={() => handleClick(movie)}>
                                <div className="relative w-full rounded-lg shadow-lg group overflow-hidden">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={movie.image}
                                            alt={movie.title}
                                            className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            <AiFillPlayCircle className="text-6xl text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 text-xs text-white bg-black bg-opacity-60 rounded z-10">
                                        <span>{movie.duration}</span>
                                    </div>
                                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 text-xs text-white bg-black bg-opacity-60 rounded z-10">
                                        <AiOutlineStar className="text-yellow-400" />
                                        <span>{movie.rating}</span>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold truncate">{movie.title}</h3>
                                        <button
                                            className="flex items-center gap-2 mt-4 text-sm text-blue-500 transition-colors hover:text-blue-700"
                                            onClick={() => handleAddToWatchlist(movie)}
                                        >
                                            <AiOutlinePlus className="text-lg" />
                                            Add to Watchlist
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </div>
    );
};

export default TrendingMoviesSection;
