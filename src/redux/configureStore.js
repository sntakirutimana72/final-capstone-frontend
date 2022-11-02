import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from './store';

const reducer = { rooms: roomsReducer, };

const store = configureStore({ reducer });
export default store;
