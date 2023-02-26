import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    login: false,
    logout: false,
  },
  reducers: {
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setLogout: (state, action) => {
      state.logout = action.payload;
    },
  },
});

export const { setLogin, setLogout } = UserSlice.actions;
export default UserSlice.reducer;
