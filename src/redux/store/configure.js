import { combineReducers } from '@reduxjs/toolkit';
import myReserves from '../features/reservations/mine';
import rooms from '../roomsSlice';

export default combineReducers({
  myReserves,
  rooms,
});
