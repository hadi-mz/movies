import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTrendingExplore = createAsyncThunk(
    "TrendingExplore/fetchTrendingExplore",
    async (trendingType) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/trending/movie/${trendingType}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );
        return response.data.results.map((movie) => ({
            image: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
            title: movie.title,
            rating: movie.vote_average,
            genres: movie.genre_ids,
            duration: "N/A"
        }));
    }
);

const ExploreTrendingSlice = createSlice({
    name: "TrendingExplore",
    initialState: {
        trendingMovies: [],
        loading: false,
        error: null,
        trendingType: "day"
    },
    reducers: {
        setTrendingType: (state, action) => {
            state.trendingType = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrendingExplore.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTrendingExplore.fulfilled, (state, action) => {
                state.trendingMovies = action.payload;
                state.loading = false;
            })
            .addCase(fetchTrendingExplore.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    }
});

export const { setTrendingType } = ExploreTrendingSlice.actions;
export default ExploreTrendingSlice.reducer;
