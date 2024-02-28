import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    is_logged_in: false,
    user: [],
  },
  reducers: {
    login: (state) => {
      state.is_logged_in = true;
    },
    logout: (state) => {
      state.is_logged_in = false;
      localStorage.removeItem("access_token");
    },
    setUser: (state, action) => {
      //state.user.push(action.payload);
      state.user = action.payload;
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice;
