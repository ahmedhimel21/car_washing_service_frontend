import { createSlice } from "@reduxjs/toolkit";

type TUser = {
  address: string;
  createdAt: string;
  email: string;
  name: string;
  phone: string;
  role: string;
  updatedAt: string;
  _id: string;
};

type TInitialState = {
  user: TUser | null;
  token: string | null;
};

const initialState: TInitialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      (state.user = user), (state.token = token);
    },
    logout: (state) => {
      (state.user = null), (state.token = null);
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
