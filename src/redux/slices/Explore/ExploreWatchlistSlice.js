import { createSlice } from "@reduxjs/toolkit";

// مقدار اولیه state که شامل یک آرایه از فیلم‌ها است
const initialState = {
    watchlist: [],  
};

// ایجاد یک slice برای مدیریت state مربوط به watchlist
const exploreWatchlistSlice = createSlice({
    name: "exploreWatchlist",
    initialState,
    reducers: {
        // اضافه کردن فیلم به watchlist
        addToWatchlist: (state, action) => {
            // بررسی اینکه فیلم قبلاً در watchlist هست یا نه
            const isMovieInWatchlist = state.watchlist.some((item) => item.title === action.payload.title);
            if (!isMovieInWatchlist) {
                // اگر فیلم در watchlist نبود، آن را اضافه کن
                state.watchlist = [...state.watchlist, action.payload];
            }
        },
        
        // حذف فیلم از watchlist
        removeFromWatchlist: (state, action) => {
            // حذف فیلم با استفاده از title آن
            state.watchlist = state.watchlist.filter(
                (movie) => movie.title !== action.payload
            );
        },
    },
});

// خروجی اکشن‌ها و ریدوسر
export const { addToWatchlist, removeFromWatchlist } = exploreWatchlistSlice.actions;
export default exploreWatchlistSlice.reducer;
