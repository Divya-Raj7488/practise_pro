import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ user: [], loading: true, authStatus: false }];

function getUserDetails(state, action) {}

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser: getUserDetails,
  },
});

export default userSlice.reducer;
export const { createUser, getUser, updateUser } = userSlice.actions;
