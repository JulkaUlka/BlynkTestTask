import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/usersSlice";

const persistedStateJSON = localStorage.getItem("reduxState");
const persistedState = persistedStateJSON ? JSON.parse(persistedStateJSON) : {};

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
