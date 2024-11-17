import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 export const fetchPopularCelebrities = createAsyncThunk(
  "celebrities/fetchPopularCelebrities",
  async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
    );
    return response.data.results.map((celebrity, index) => ({
      image: `https://image.tmdb.org/t/p/original${celebrity.profile_path}`,
      name: celebrity.name,
      popularity: celebrity.popularity,
      rank: index + 1,
    }));
  }
);

const celebritiesSlice = createSlice({
  name: "celebrities",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularCelebrities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularCelebrities.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPopularCelebrities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default celebritiesSlice.reducer;
