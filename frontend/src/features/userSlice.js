import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ user: [], loading: true, authStatus: false }];

function createNewUser(state, action) {
  
}

function getUserDetails(state,action) {

}

function updateUserDetails (state,action) {
  // update password.
}
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // reducers handles actions
    createUser: createNewUser,
    getUser: getUserDetails,
    updateUser: updateUserDetails,
  },
});

export default userSlice.reducer;
export const { createUser, getUser, updateUser } = userSlice.actions;
