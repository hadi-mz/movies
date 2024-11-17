import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchSuggestions from './SearchSuggestions';
import SearchResultsModal from './SearchResults';

export default function Searchbar() {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const fetchSuggestions = async (input) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${input}`);
            setSuggestions(response.data.results);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
    };
    useEffect(()=>{
        fetchSuggestions()
    },[])

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setQuery(inputValue);

        if (inputValue.length > 2) {
            fetchSuggestions(inputValue);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionSelect = (movie) => {
        setQuery(movie.title);
        setSelectedMovie(movie);
        setIsModalOpen(true);
        setSuggestions([]);
    };

    return (
        <div className="w-full py-4 flex justify-center">
            <form className="lg:w-10/12 md:w-8/12 max-sm:w-10/12 relative">
                <div className="flex">
                    <div className="relative w-full">
                        <input
                            type="search"
                            value={query}
                            onChange={handleInputChange}
                            placeholder="Search Your Favorite Movies"
                            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border border-gray-300 focus:ring-blue-500"
                            required
                        />
                        {query && <SearchSuggestions suggestions={suggestions} onSelect={handleSuggestionSelect} />}
                    </div>
                    <button type="submit" className="absolute top-0 right-0 p-4 text-sm font-medium h-full text-white bg-[#950000]">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </form>

        </div>
    );
}
 