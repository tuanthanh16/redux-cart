import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  notification: null, // notification = {}
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.show = !state.show;
    },
    setNotification(state, action) {
      state.notification = {
        title: action.payload.title,
        status: action.payload.status,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
