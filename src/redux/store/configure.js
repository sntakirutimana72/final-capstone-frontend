import { combineReducers } from '@reduxjs/toolkit';
import myReserves from '../features/reservations/mine';

export default combineReducers({
  myReserves,
});
