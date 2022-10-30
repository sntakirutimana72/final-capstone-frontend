import { configureStore } from "@reduxjs/toolkit";
import { bookInfo } from "./store";

const store = configureStore({
  reducer: { rocket: bookInfo.reducer },
});
export default store;
