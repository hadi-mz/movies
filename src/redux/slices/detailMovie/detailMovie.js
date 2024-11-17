import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDetailMovie = createAsyncThunk(
    'detailMovie/fetchDetailMovie',
    async (title) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${title}&language=en-US`
        );
        
        const movie = response.data.results[0]; 

        if (!movie) {
            throw new Error("Movie not found");
        }

        const detailsResponse = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );

        return {
            image: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
            title: movie.title,
            overview: movie.overview,
            releaseDate: movie.release_date,
            genreIds: movie.genre_ids,
            runtime: detailsResponse.data.runtime,
            voteAverage: movie.vote_average,
        };
    }
);


const detailMovieSlice = createSlice({
    name: 'detailMovie',
    initialState: {
        movies: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDetailMovie.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchDetailMovie.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.loading = false;
            })
            .addCase(fetchDetailMovie.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    }
});

export default detailMovieSlice.reducer;
