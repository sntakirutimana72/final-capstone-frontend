import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "./roomsSlice";

export default configureStore({
  reducer: {
    rooms: roomsReducer,
  },
});
