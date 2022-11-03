import { combineReducers } from '@reduxjs/toolkit';
import myReserves from '../features/reservations/mine';
import rooms from '../roomsSlice';
import newRoom from '../addRoomSlice';

export default combineReducers({
  myReserves,
  rooms,
  newRoom,
});
