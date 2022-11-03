import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getOnlyMine, createReservation } from '../../../apis/v1/reservations';
import {
  onPending,
  onRejected,
  onFulfilled,
  afterCancelation,
  afterUpdate,
  visibilityFilters,
} from '../../effects/reservations/mine';

const name = 'reservations/mine';
const addReserve = 'reservations/AddReserve';
export const fetchOnlyMine = createAsyncThunk(name, getOnlyMine);
export const addNewReserve = createAsyncThunk(addReserve, (data) => createReservation(data));
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
