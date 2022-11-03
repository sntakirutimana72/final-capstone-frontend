import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getOnlyMine } from '../../../apis/hotel_booking/v1/reservations';
import {
  onPending,
  onRejected,
  onFulfilled,
  afterCancelation,
  afterUpdate,
  visibilityFilters,
} from '../../effects/reservations/mine';

const name = 'reservations/mine';
export const fetchOnlyMine = createAsyncThunk(name, getOnlyMine);

const initialState = {
  status: 'idle',
  analytics: [0, 0, 0, 0],
  reservations: null,
  visibilityFilter: visibilityFilters.ALL,
};
const slice = createSlice({
  name,
  initialState,
  reducers: {
    updateReservation: afterUpdate,
    cancelReservation: afterCancelation,
    setVisibilityFilter: (state, { payload }) => ({
      ...state,
      visibilityFilter: payload,
    }),
  },
  extraReducers: {
    [fetchOnlyMine.pending]: onPending,
    [fetchOnlyMine.rejected]: onRejected,
    [fetchOnlyMine.fulfilled]: onFulfilled,
  },
});

export const { setVisibilityFilter, updateReservation, cancelReservation } = slice.actions;

export default slice.reducer;
