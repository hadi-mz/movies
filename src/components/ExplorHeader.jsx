import React, { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';

// API key خود را در این متغیر جایگزین کنید
const API_KEY = 'YOUR_IMDB_API_KEY';

export default function ExploreHeader() {
    const [backgroundImage, setBackgroundImage] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/movies');
                const data = await response.json();
                const fetchedMovies = data.items.slice(0, 7).map(movie => ({
                    image: movie.image,
                    title: movie.title
                }));
                setMovies(fetchedMovies);
                setBackgroundImage(fetchedMovies[0].image);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
    
        fetchMovies();
    }, []);
    
    const handleCardClick = (image) => {
        setBackgroundImage(image);
    };

    return (
        <header
            className="relative h-[650px] bg-cover bg-center opacity-90 overflow-hidden transition-all duration-500 ease-in-out"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${backgroundImage})`
            }}
        >
            {/* Central content section of the header */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 lg:px-16">
                <h1 className="text-4xl font-bold mb-4">Explore Movies</h1>
                <p className="text-lg mb-6">Find your favorite movies and series here.</p>
                <button className="flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition">
                    <FaPlay /> Watch Now
                </button>
            </div>

            {/* Movie cards */}
            <div className="absolute bottom-0 w-full flex justify-center overflow-x-auto py-4 bg-black bg-opacity-50">
                <div className="flex gap-4 px-4">
                    {movies.map((movie, index) => (
                        <div
                            key={index}
                            className="cursor-pointer transform transition-transform hover:scale-105"
                            onClick={() => handleCardClick(movie.image)}
                        >
                            <img
                                src={movie.image}
                                alt={movie.title}
                                className="w-32 h-48 rounded-lg shadow-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
}
