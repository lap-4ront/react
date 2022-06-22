import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_BASE_URL } from "./../../config";

export const createShortLink = createAsyncThunk(
  "links/createShortLink",
  async (url) => {
    const response = await fetch(API_BASE_URL + url, { method: "POST" });
    const result = await response.json();
    return result;
  }
);

const initialState = {
  items: [],
  lodaing: "idle"
};

const linkSlice = createSlice({
  name: "links",
  initialState,
  // reducers,
  extraReducers: {
    [createShortLink.rejected]: (state) => {
      state.lodaing = "rejected";
    },
    [createShortLink.pending]: (state) => {
      state.lodaing = "lodaing";
    },
    [createShortLink.fulfilled]: (state, action) => {
      const { ok, result } = action.payload;

      if (ok) {
        state.items.push(result);
        state.lodaing = "idle";
      } else {
        state.lodaing = "error";
      }
    }
  }
});

export default linkSlice.reducer;
