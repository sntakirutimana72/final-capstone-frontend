import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export default getRooms = createAsyncThunk("rooms/getRooms", async () => {
  const response = await axios.get("http://127.0.0.1:3000/api/v1/rooms");
  return response.data;
});

export const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    data: [],
    loading: "idle",
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    // Pending
    builder.addCase(getRooms.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });

    // Fulfilled
    builder.addCase(getRooms.fulfilled, (state, action) => {
      if (state.loading === "pending") {
        state.data = action.payload;
        state.loading = "idle";
      }
    });

    // Rejected
    builder.addCase(getRooms.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = "An error occurred !";
      }
    });
  },
});

export default roomsSlice.reducer
