import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourites",
  initialState: {
    list: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
