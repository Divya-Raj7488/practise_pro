import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  loading: true,
  AuthStatus: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: () => {
      return state.user;
    },
    setUser: (state, action) => {
      if (action.payload !== undefined) {
        state.user = action.payload;
        state.loading = false;
        state.AuthStatus = true;
      } else {
        console.log("incorrect data");
      }
    },
  },
});
export const {getUser, setUser} = userSlice.actions
export default userSlice.reducer;
