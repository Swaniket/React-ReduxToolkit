import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Swaniket Chowdhury" },
  { id: "1", name: "Rohan Banerjee" },
  { id: "2", name: "Atmadhi Sarkar" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

// Selectors
export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
