// redux/store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Counter Slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
  },
});

// Theme Slice
const themeSlice = createSlice({
  name: "theme",
  initialState: { darkMode: false },
  reducers: {
    toggleTheme: (state) => { state.darkMode = !state.darkMode; },
  },
});

// Store Setup
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export const { increment } = counterSlice.actions;
export const { toggleTheme } = themeSlice.actions;
