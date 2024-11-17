// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { AiOutlineStar, AiFillPlayCircle, AiOutlinePlus } from "react-icons/ai";

// const SearchResults = ({ query }) => {
//     const [movies, setMovies] = useState([]);

//     const fetchMovies = async () => {
//         if (!query) return; 
//         try {
//             const response = await axios.get(
//                 `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`
//             );
//             const moviesData = response.data.results;

//             const movieDetails = moviesData.map((movie) => ({
//                 image: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
//                 title: movie.title,
//                 rating: movie.vote_average,
//                 duration: "N/A"
//             }));

//             setMovies(movieDetails);
//         } catch (error) {
//             console.error("Error fetching movies:", error);
//         }
//     };

//     useEffect(() => {
//         fetchMovies();
//     }, [query]); 

//      if (!query || movies.length === 0) return null;

//     return (
//         <div className="flex flex-col items-center p-3 mt-6 text-black">
//             <div className="w-11/12">
//                 <h2 className="text-2xl font-bold text-black mb-4">Search Results</h2>
//                 <Swiper
//                     slidesPerView={1.5}
//                     spaceBetween={20}
//                     breakpoints={{
//                         640: { slidesPerView: 2.5 },
//                         768: { slidesPerView: 4.5 },
//                         1024: { slidesPerView: 6.5 },
//                     }}
//                 >
//                     {movies.map((movie, index) => (
//                         <SwiperSlide key={index}>
//                             <div className="relative w-full rounded-lg shadow-lg group overflow-hidden">
//                                 <div className="relative overflow-hidden">
//                                     <img
//                                         src={movie.image}
//                                         alt={movie.title}
//                                         className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
//                                     />
//                                     <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                                         <AiFillPlayCircle className="text-6xl text-white" />
//                                     </div>
//                                 </div>
//                                 <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 text-xs text-white bg-black bg-opacity-60 rounded z-10">
//                                     <AiOutlineStar className="text-yellow-400" />
//                                     <span>{movie.rating}</span>
//                                 </div>
//                                 <div className="p-4">
//                                     <h3 className="text-lg font-semibold truncate">{movie.title}</h3>
//                                     <button
//                                         className="flex items-center gap-2 mt-4 text-sm text-blue-500 transition-colors hover:text-blue-700"
//                                     >
//                                         <AiOutlinePlus className="text-lg" />
//                                         Add to Watchlist
//                                     </button>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </div>
//     );
// };

// export default SearchResults;
