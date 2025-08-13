import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedDate: null,
  events: {},
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setEvents: (state, action) => {
      state.events = action.payload;
    },
  },
});

export const { setSelectedDate, setEvents } = calendarSlice.actions;
export default calendarSlice.reducer;
