
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopMoviesAWeekExplore } from "../redux/slices/Explore/ExploreTopMoviesAWeekSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { AiFillStar, AiOutlinePlus } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { PiWarningCircleFill } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Navigation } from "swiper/modules";
import { Skeleton } from 'antd';
import { motion } from 'framer-motion'; // Import Framer Motion
import { addToWatchlist } from "../redux/slices/Explore/ExploreWatchlistSlice";

const TopMoviesAWeek = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(state => state.TopMoviesAWeek);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    dispatch(fetchTopMoviesAWeekExplore());
  }, [dispatch]);

  const watchlist = useSelector((state) => state.exploreWatchlist.watchlist);

  const handleAddToWatchlist = (movie) => {
    const isMovieInWatchlist = watchlist.some((item) => item.title === movie.title);

    if (isMovieInWatchlist) {
      setAlertMessage("This movie is already in your watchlist!");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000); // Hide alert after 3 seconds
    } else {
      dispatch(addToWatchlist(movie));
    }
  };

  if (loading) {
    return (
      <div className="w-11/12 p-4 mt-4 mx-auto">
        <Skeleton active paragraph={{ rows: 1 }} />
        <Swiper
          modules={[Navigation]}
          spaceBetween={5}
          className="mt-4"
          slidesPerView={1}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 6 },
          }}
        >
          {[...Array(10)].map((_, index) => (
            <SwiperSlide key={index}>
              <Skeleton active />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  if (error) {
    return <div>Error fetching movies: {error}</div>;
  }

  return (
    <div
      className="w-11/12 p-4 mt-4 mx-auto"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Modal Alert */}
      {showAlert && (
        <motion.div
          className="
            bg-[#950000] fixed top-2 z-30 right-6 text-white lg:p-4 p-1.5 lg:rounded-lg rounded-sm lg:text-lg text-xs shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          drag
          dragConstraints={{ left: 0, right: 300 }}
          dragElastic={0.2}
        >
          {alertMessage}
        </motion.div>
      )}

      {/* Header Section */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <span className="border-e-8 h-8 rounded-full border-[#E91E63] transition-transform duration-300 group-hover:hidden"></span>
        <h2 className="text-xl lg:text-2xl font-bold text-black transition-transform duration-300 group-hover:scale-110">
          Top 10 this week
        </h2>
        <MdKeyboardArrowRight
          size={30}
          className="text-[#E91E63] opacity-0 transition-opacity duration-300 transform group-hover:opacity-100 group-hover:scale-125"
        />
      </div>

      {/* Movie Swiper */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={5}
        className="mt-4"
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 6 },
        }}
      >
        {movies.slice(0, 10).map((movie, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-48 object-cover bg-cover"
              />
              <div className="p-3 py-4">
                <div className="flex items-center mb-2">
                  <AiFillStar className="text-yellow-400 mr-1" />
                  <span className="text-xs font-bold">{movie.voteAverage}</span>
                </div>
                <h3 className="text-sm font-semibold">{movie.title}</h3>
                <p className="text-gray-400 text-[10px]">{movie.releaseDate}</p>
                <p className="text-gray-400 mt-2 text-xs">{movie.overview.slice(1, 80)}</p>
                <div className="flex flex-col justify-center items-center mt-4 gap-2">
                  {/* Add hover effect to the button with Framer Motion */}
                  <motion.button
                    onClick={() => handleAddToWatchlist(movie)}
                    className="mt-4 flex items-center gap-2 text-sm text-blue-500 hover:text-blue-700 transition-colors"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(30, 144, 255, 0.1)", // Change color on hover
                      transition: { duration: 0.3 },
                    }}
                  >
                    <AiOutlinePlus className="text-lg" />
                    Add to Watchlist
                  </motion.button>
                  <button className="text-white font-normal w-full px-1">
                    <span className="w-full flex justify-between items-center">
                      <div className="flex gap-1 items-center">
                        <FaPlay size={10} />
                        Trailer
                      </div>
                      <PiWarningCircleFill size={25} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopMoviesAWeek;
