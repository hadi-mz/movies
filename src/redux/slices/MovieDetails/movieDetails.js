import { createSlice } from '@reduxjs/toolkit';

const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState: {
    details: null, 
    loading: false,
    error: null,
  },
  reducers: {
    setMovieDetails: (state, action) => {
      state.details = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setMovieDetails, setLoading, setError } = movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;
