import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import roomsReducer from './roomsReducer';

const reducer = combineReducers({
  rooms: roomsReducer,
});

const myStore = configureStore({ reducer }, applyMiddleware(thunk));
export default myStore;
