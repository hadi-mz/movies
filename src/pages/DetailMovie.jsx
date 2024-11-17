// import React, { useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { TiStarFullOutline } from 'react-icons/ti';
// import { AiFillPlayCircle } from 'react-icons/ai';
// import { fetchDetailMovie } from '../redux/slices/detailMovie/detailMovie';

// export default function DetailMovie() {
//     const { title } = useParams();
//     const dispatch = useDispatch();

//     const { movies: details, loading, error } = useSelector((state) => state.detailMovie);
//     console.log(details.overview);
//     useEffect(() => {
//         if (title) {
//             dispatch(fetchDetailMovie(title));
//         }
//     }, [dispatch, title]);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;


//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;

//     console.log("Movie Details:", details);



//     const genreMap = {
//         28: "Action",
//         12: "Adventure",
//         16: "Animation",
//         35: "Comedy",
//         80: "Crime",
//         99: "Documentary",
//         18: "Drama",
//         10751: "Family",
//         14: "Fantasy",
//         36: "History",
//         27: "Horror",
//         10402: "Music",
//         9648: "Mystery",
//         10749: "Romance",
//         878: "Science Fiction",
//         10770: "TV Movie",
//         53: "Thriller",
//         10752: "War",
//         37: "Western",
//         10759: "Action & Adventure",
//         10762: "Kids",
//         10763: "News",
//         10764: "Reality",
//         10765: "Sci-Fi & Fantasy",
//         10766: "Soap",
//         10767: "Talk",
//         10768: "War & Politics"
//     };

//     const convertGenre = (genreIds) => {
//         return genreIds.map(id => genreMap[id]).filter(Boolean).join(', ');
//     };
//     console.log("Genres:", details?.genres);
//     const genresNames = details?.genre_ids ? convertGenre(details.genre_ids) : '';

//     return (
//         <div className="relative min-h-screen flex flex-col bg-gray-900 text-white">
//             {/* Background Layer */}
//             <div
//                 className="absolute inset-0 bg-cover bg-center opacity-40 z-0"
//                 style={{
//                     backgroundImage: `url(${details?.image})`,
//                     filter: 'blur(30px)',
//                 }}
//             />

//             {/* Navbar */}
//             <Navbar />

//             {/* Main Content */}
//             <div className="relative z-10 flex flex-col items-center px-4 py-8 mt-16">
//                 <div className="w-full max-w-3xl flex flex-col md:flex-row items-center  bg-opacity-50 p-8 rounded-lg shadow-2xl space-y-6 md:space-y-0 md:space-x-8">




//                     <div className="md:w-2/3 w-full flex flex-col gap-2 space-y-4">
//                         <p className="text-sm text-gray-400">Vivamus sit amet</p>
//                         <h1 className="text-4xl font-bold w-8/12">{details?.title || "Title not available"}</h1>
//                         <div className="flex items-center text-yellow-400 space-x-2">
//                             <TiStarFullOutline size={24} />
//                             <span className="text-2xl font-semibold">{details?.voteAverage || "No rating"}</span>
//                             <span className="text-gray-500">|</span>
//                             <p className="text-gray-400">{details?.runtime ? `${details.runtime} min` : "No duration"}</p>
//                         </div>
//                         <p className="text-gray-300 text-lg">
//                             {details?.genres ? convertGenre(details.genres) : "N/A"}
//                         </p>
//                         <p className="text-gray-500">{details?.overview || "No overview available"}</p>
//                         <div className="flex space-x-4">
//                             <button className="pe-6 text-start flex justify-start font-semibold py-2 text-blue-600 rounded-md">
//                                 Watch Trailer
//                             </button>
//                             <button className="hidden lg:flex text-white font-semibold py-2 px-8 rounded-full bg-[#E91E63]">
//                                 Watch Full Movie
//                             </button>
//                         </div>
//                     </div>





//                     <div className="md:w-1/3  w-full max-w-xs relative group h-80">
//                         <img
//                             src={details.image}
//                             alt={details.title}
//                             className="rounded-lg  shadow-lg w-full transition-transform h-full object-cover duration-300 group-hover:scale-110"
//                         />

//                         {/* Play Icon Overlay */}
//                         <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg">
//                             <AiFillPlayCircle className="text-6xl text-white cursor-pointer" />
//                         </div>
//                     </div>






//                 </div>
//                 {/* Storyline and Info */}
//                 <div className="w-full max-w-4xl bg-white bg-opacity-45 py-10  mt-8 rounded-2xl shadow-lg px-12  flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
//                     {/* Storyline Section */}
//                     <div className="md:w-2/3 w-full gap-3 flex flex-col">
//                         <h2 className="text-3xl font-bold text-blackstart mb-4 text-black">Storyline</h2>
//                         <p className="text-[#000000] leading-relaxed w-8/12 font-normal">
//                             Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                         </p>
//                         <div className="flex space-x-6 mt-6  gap-6">
//                             <button className="text-[#304FFE] hover:underline font-bold flex gap-2 items-center">
//                                 <svg width="20" height="20" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path fill-rule="evenodd" clip-rule="evenodd" d="M29.9833 28.6289C28.4791 28.6289 27.0748 29.1365 26.072 30.1516L11.7323 21.7257C11.8327 21.218 11.9331 20.8116 11.9331 20.304C11.9331 19.7963 11.8327 19.3899 11.7323 18.8823L25.8722 10.5584C26.9749 11.5736 28.3792 12.1823 29.9833 12.1823C33.2922 12.1823 36 9.44107 36 6.0911C36 2.74133 33.2922 0 29.9833 0C26.6742 0 23.9665 2.74133 23.9665 6.0912C23.9665 6.59883 24.0664 7.00536 24.1673 7.51289L10.0279 15.8368C8.92472 14.8216 7.52091 14.2129 5.91638 14.2129C2.60738 14.2129 0 16.9542 0 20.3041C0 23.654 2.70722 26.3953 6.01669 26.3953C7.62122 26.3953 9.02503 25.7865 10.1282 24.7713L24.368 33.1973C24.2671 33.6028 24.1672 34.0093 24.1672 34.5169C24.1672 37.7658 26.7741 40.4048 29.9832 40.4048C33.1922 40.4048 35.7991 37.7658 35.7991 34.5169C35.7992 31.2679 33.1924 28.6289 29.9833 28.6289Z" fill="#304FFE" />
//                                 </svg>
//                                 <span>
//                                     SHARE
//                                 </span>
//                             </button>
//                             <button className="text-[#304FFE] hover:underline font-bold flex gap-2 items-center">
//                                 <svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path fill-rule="evenodd" clip-rule="evenodd" d="M34.65 13.5007H4.88077L34.4077 7.12537C35.1433 6.97536 35.6192 6.21595 35.4808 5.42841L34.7106 1.17194C34.5721 0.384404 33.8625 -0.121872 33.1269 0.0281358L1.09904 6.92848C0.363462 7.07849 -0.1125 7.83791 0.0259615 8.61607L0.796154 12.8725C0.848077 13.135 0.977885 13.3601 1.13365 13.5476C0.493269 13.6601 0 14.2226 0 14.9445V34.558C0 35.3549 0.605769 36.0018 1.35 36.0018H34.65C35.3942 36.0018 36 35.3549 36 34.558V14.9445C36 14.1476 35.3942 13.5007 34.65 13.5007ZM22.2404 31.7266L17.8529 28.3233L13.4654 31.7266L15.1529 26.2513L10.7567 22.8762H16.1827L17.8442 17.4009L19.5144 22.8762H24.9404L20.5442 26.2513L22.2404 31.7266Z" fill="#304FFE" />
//                                 </svg>

//                                 <span>
//                                     trivia
//                                 </span>
//                             </button>

//                             <button className="text-[#304FFE] hover:underline font-bold flex gap-2 items-center">
//                                 <svg width="20" height="20" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path fil-rule="evenodd" clip-rule="evenodd" d="M36 12.8672H22.2268L18 0L13.7732 12.8672H0L11.2661 20.7849L6.87857 33.6522L18 25.6779L29.1214 33.6522L24.7259 20.7849L36 12.8672Z" fill="#304FFE" />
//                                 </svg>


//                                 <span>
//                                     rate this
//                                 </span>
//                             </button>

//                         </div>
//                     </div>

//                     {/* Additional Info Section */}
//                     <div className="md:w-1/3 w-full flex flex-col gap-3 space-y-4 text-black">
//                         <div className='flex flex-col gap-1'>
//                             <h3 className=" text-black font-bold">DIRECTOR:</h3>
//                             <p className='text-sm text-gray-800'>John Doe</p>
//                         </div>
//                         <div className='flex flex-col gap-1'>
//                             <h3 className="font-bold text-black">WRITERS:</h3>
//                             <p className='text-sm text-gray-800'>John Doe, Jim Doe, Jane Doe</p>
//                         </div>
//                         <div className='flex flex-col gap-1'>
//                             <h3 className="font-bold text-black">STARS:</h3>
//                             <p className='text-sm text-gray-800'>Jena Doe, James Doe, Jack Doe, Jimmy Doe</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Footer */}
//             <Footer variant="white" />
//         </div>
//     );
// }























import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TiStarFullOutline } from 'react-icons/ti';
import { AiFillPlayCircle } from 'react-icons/ai';
import { fetchDetailMovie } from '../redux/slices/detailMovie/detailMovie';

export default function DetailMovie() {
    const { title } = useParams();
    const dispatch = useDispatch();

    const { movies: details, loading, error } = useSelector((state) => state.detailMovie);
    console.log(details.overview);
    useEffect(() => {
        if (title) {
            dispatch(fetchDetailMovie(title));
        }
    }, [dispatch, title]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    console.log("Movie Details:", details);



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
    console.log("Genres:", details?.genres);
    const genresNames = details?.genre_ids ? convertGenre(details.genre_ids) : '';

    return (
        <div className="relative min-h-screen flex flex-col bg-gray-900 text-white">
            {/* Background Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40 z-0"
                style={{
                    backgroundImage: `url(${details?.image})`,
                    filter: 'blur(30px)',
                }}
            />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center px-4 py-8 mt-16">
                <div className="w-full max-w-3xl flex flex-col-reverse gap-6 md:flex-row  items-center  bg-opacity-50 p-8 rounded-lg shadow-2xl space-y-6 md:space-y-0 md:space-x-8">




                    <div className="md:w-2/3 w-full flex flex-col lg:gap-2 max-sm:gap-0 lg:space-y-4 max-sm:space-y-1.5">
                        <p className="lg:text-sm max-sm:text-xs text-white">Vivamus sit amet</p>
                        <h1 className="lg:text-4xl max-sm:text-xl font-bold w-8/12">{details?.title || "Title not available"}</h1>
                        <div className="flex items-center text-yellow-400 space-x-2 mt-4">
                            <TiStarFullOutline size={24} />
                            <span className="lg:text-2xl text-xl max-sm:text-sm font-semibold">{details?.voteAverage || "No rating"}</span>
                            <span className="text-white">|</span>
                            <p className="text-white">{details?.runtime ? `${details.runtime} min` : "No duration"}</p>
                        </div>
                        <p className="text-gray-300 text-lg">
                            {details?.genres ? convertGenre(details?.genres) : "N/A"}
                        </p>
                        <p className="text-white lg:text-sm max-sm:text-[11px]">{details?.overview || "No overview available"}</p>
                        <div className="flex space-x-4">
                            <button className="pe-6 text-start flex justify-start font-semibold lg:py-2 max-sm:py-1.5 max-sm:px-2 max-sm:text-xs text-sm lg:text-xl text-blue-600 rounded-md">
                                Watch Trailer
                            </button>
                            <button className=" text-white font-semibold lg:py-2 lg:px-8 px-6 py-2 max-sm:py-1.5 max-sm:text-xs text-sm lg:text-xl max-sm:px-4 rounded-full bg-[#E91E63]">
                                Watch Full Movie
                            </button>
                        </div>
                    </div>





                    <div className="md:w-1/3    w-full max-w-xs relative group h-80">
                        <img
                            src={details.image}
                            alt={details.title}
                            className="rounded-lg  shadow-lg w-full transition-transform h-full object-cover duration-300 group-hover:scale-110"
                        />

                        {/* Play Icon Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg">
                            <AiFillPlayCircle className="text-6xl text-white cursor-pointer" />
                        </div>
                    </div>






                </div>
                {/* Storyline and Info */}
                <div className="w-full max-w-4xl bg-white bg-opacity-45 py-10  mt-8 rounded-2xl shadow-lg px-12  flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
                    {/* Storyline Section */}
                    <div className="md:w-2/3 w-full lg:gap-3 gap-2 max-sm:gap-0 flex flex-col">
                        <h2 className="lg:text-3xl text-xl max-sm:text-[16px] font-extrabold text-blackstart mb-4 text-black">Storyline</h2>
                        <p className="text-[#000000] leading-relaxed lg:w-8/12 w-8/12 lg:text-xl text-sm max-sm:text-[14px]  max-sm:w-full font-normal">
                            Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <div className="flex space-x-7 border mt-6  lg:gap-6 gap-4 max-sm:gap-0 w-full">
                            <button className="text-[#304FFE] hover:underline font-bold flex gap-2 items-center">
                                <svg width="20" height="20" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.9833 28.6289C28.4791 28.6289 27.0748 29.1365 26.072 30.1516L11.7323 21.7257C11.8327 21.218 11.9331 20.8116 11.9331 20.304C11.9331 19.7963 11.8327 19.3899 11.7323 18.8823L25.8722 10.5584C26.9749 11.5736 28.3792 12.1823 29.9833 12.1823C33.2922 12.1823 36 9.44107 36 6.0911C36 2.74133 33.2922 0 29.9833 0C26.6742 0 23.9665 2.74133 23.9665 6.0912C23.9665 6.59883 24.0664 7.00536 24.1673 7.51289L10.0279 15.8368C8.92472 14.8216 7.52091 14.2129 5.91638 14.2129C2.60738 14.2129 0 16.9542 0 20.3041C0 23.654 2.70722 26.3953 6.01669 26.3953C7.62122 26.3953 9.02503 25.7865 10.1282 24.7713L24.368 33.1973C24.2671 33.6028 24.1672 34.0093 24.1672 34.5169C24.1672 37.7658 26.7741 40.4048 29.9832 40.4048C33.1922 40.4048 35.7991 37.7658 35.7991 34.5169C35.7992 31.2679 33.1924 28.6289 29.9833 28.6289Z" fill="#304FFE" />
                                </svg>
                                <span className='lg:text-2xl text-xl max-sm:text-xs'>
                                    SHARE
                                </span>
                            </button>
                            <button className="text-[#304FFE] hover:underline font-bold flex gap-2 items-center">
                                <svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.65 13.5007H4.88077L34.4077 7.12537C35.1433 6.97536 35.6192 6.21595 35.4808 5.42841L34.7106 1.17194C34.5721 0.384404 33.8625 -0.121872 33.1269 0.0281358L1.09904 6.92848C0.363462 7.07849 -0.1125 7.83791 0.0259615 8.61607L0.796154 12.8725C0.848077 13.135 0.977885 13.3601 1.13365 13.5476C0.493269 13.6601 0 14.2226 0 14.9445V34.558C0 35.3549 0.605769 36.0018 1.35 36.0018H34.65C35.3942 36.0018 36 35.3549 36 34.558V14.9445C36 14.1476 35.3942 13.5007 34.65 13.5007ZM22.2404 31.7266L17.8529 28.3233L13.4654 31.7266L15.1529 26.2513L10.7567 22.8762H16.1827L17.8442 17.4009L19.5144 22.8762H24.9404L20.5442 26.2513L22.2404 31.7266Z" fill="#304FFE" />
                                </svg>

                                <span className='lg:text-2xl text-xl max-sm:text-xs'>
                                    trivia
                                </span>
                            </button>

                            <button className="text-[#304FFE] hover:underline font-bold flex gap-2 items-center">
                                <svg width="20" height="20" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fil-rule="evenodd" clip-rule="evenodd" d="M36 12.8672H22.2268L18 0L13.7732 12.8672H0L11.2661 20.7849L6.87857 33.6522L18 25.6779L29.1214 33.6522L24.7259 20.7849L36 12.8672Z" fill="#304FFE" />
                                </svg>


                                <span className='lg:text-2xl text-xl max-sm:text-xs'>
                                    rate this
                                </span>
                            </button>

                        </div>
                    </div>

                    {/* Additional Info Section */}
                    <div className="md:w-1/3 w-full flex flex-col gap-3 space-y-4 text-black">
                        <div className='flex flex-col gap-1'>
                            <h3 className=" text-black font-bold">DIRECTOR:</h3>
                            <p className='text-sm text-gray-800'>John Doe</p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h3 className="font-bold text-black">WRITERS:</h3>
                            <p className='text-sm text-gray-800'>John Doe, Jim Doe, Jane Doe</p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h3 className="font-bold text-black">STARS:</h3>
                            <p className='text-sm text-gray-800'>Jena Doe, James Doe, Jack Doe, Jimmy Doe</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer variant="white" />
        </div>
    );
}
