import React from 'react';

function SearchSuggestions({ suggestions, onSelect }) {
    return (
        <div className="absolute z-20 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700">
            {suggestions.length > 0 ? (
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    {suggestions.map((suggestion) => (
                        <li key={suggestion.id} className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer" onClick={() => onSelect(suggestion)}>
                            <img src={`https://image.tmdb.org/t/p/w45${suggestion.poster_path}`} alt={suggestion.title} className="w-10 h-15 object-cover rounded" />
                            <span>{suggestion.title}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="px-4 py-2 text-gray-500 dark:text-gray-300">
                    No suggestions found
                </div>
            )}
        </div>
    );
}

export default SearchSuggestions;
