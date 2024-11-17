import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTopMoviesAWeekExplore = createAsyncThunk(
    'TopMoviesAWeek/fetchTopMoviesAWeek',
    async () => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
            );
            const moviesData = response.data.results;

            const movieDetails = await Promise.all(
                moviesData.map(async (movie) => {
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
                })
            );
            return movieDetails;
        } catch (error) {
            console.error("Error fetching movies:", error);
            throw error; // Throwing the error to handle it in the component if needed
        }
    }
);

const topMoviesSlice = createSlice({
    name: 'TopMoviesAWeek',
    initialState: {
        movies: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopMoviesAWeekExplore.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTopMoviesAWeekExplore.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.loading = false;
            })
            .addCase(fetchTopMoviesAWeekExplore.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default topMoviesSlice.reducer;
