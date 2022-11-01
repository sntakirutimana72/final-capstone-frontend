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
export const fetchOnlyMine = createAsyncThunk(name, getOnlyMine());

const initialState = {
  status: 'fulfilled',
  analytics: [2, 1, 1, 0],
  reservations: [
    {
      id: 1,
      from_date: '2022-10-28',
      to_date: '2022-10-30',
      status: 'Pending',
      room: {
        name: 'RMGT-05',
        number_of_beds: 1,
        price: '129.75',
        type: 'single',
        description: 'A high class room with a wonderful view and access to the roof',
        accomodations: [
          'internet',
          'lunch',
          'dinner',
          'breakfast',
          'garden',
          'transport',
        ],
      },
    },
    {
      id: 2,
      from_date: '2022-09-18',
      to_date: '2022-10-30',
      status: 'Confirmed',
      room: {
        name: 'RMGT-02',
        number_of_beds: 2,
        price: '179.0',
        type: 'couple',
        description: 'A high class room with a wonderful view and access to the roof',
        accomodations: [
          'internet',
          'lunch',
          'dinner',
        ],
      },
    },
  ],
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
