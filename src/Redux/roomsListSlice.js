import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import AuthTokenStore from '../helpers/store_session';

const config = {
  headers: { Authorization: AuthTokenStore.fetch() },
};

export const getRoomsList = createAsyncThunk('roomsList/getRoomsList', async () => {
  const response = await axios.get('http://127.0.0.1:3000//api/v1/room-list', config);
  return response.data.rooms;
});

export const roomsListSlice = createSlice({
  name: 'roomsList',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRoomsList.pending, (state) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    });

    // Fulfilled
    builder.addCase(getRoomsList.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload;
        state.loading = 'idle';
      }
    });

    // Rejected
    builder.addCase(getRoomsList.rejected, (state) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.error = 'An error occurred !';
      }
    });
  },
});

export default roomsListSlice.reducer;
