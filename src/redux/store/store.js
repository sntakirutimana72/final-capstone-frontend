import { configureStore } from '@reduxjs/toolkit';
import { reservationsReducer } from '../reducers/reservationsReducer';
import userReducer from '../reducers/userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    reservations: reservationsReducer,
  },
});

export default store;
