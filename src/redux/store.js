import { configureStore } from '@reduxjs/toolkit';
import ExploreHeaderSlice from './slices/Explore/ExploreHeaderSlice';
import ExploreTrendingSlice from "./slices/Explore/ExploreTrendingSlice"
import topMoviesAWeekReducer from './slices/Explore/ExploreTopMoviesAWeekSlice';
import celebritiesReducer from "./slices/Explore/ExplorePopularCelebrities";
import exploreWatchlistReducer from "./slices/Explore/ExploreWatchlistSlice";
import movieDetailsReducer from './slices/MovieDetails/movieDetails';
import detailMovieSlice from "./slices/detailMovie/detailMovie"
const store = configureStore({
    reducer: {
        HeaderExplore: ExploreHeaderSlice,
        TrendingExplore: ExploreTrendingSlice,
        TopMoviesAWeek: topMoviesAWeekReducer,
        celebrities: celebritiesReducer,
        exploreWatchlist: exploreWatchlistReducer,
        movieDetails: movieDetailsReducer,
        detailMovie: detailMovieSlice

    },
});

export default store;
