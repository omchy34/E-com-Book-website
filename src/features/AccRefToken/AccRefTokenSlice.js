// features/AccRefToken/AccRefTokenSlice.js
import { createSlice } from '@reduxjs/toolkit';

const AccRefTokenSlice = createSlice({
  name: 'AccRefToken',
  initialState: {
    AccRefToken: {
      accessToken: localStorage.getItem('accessToken') || null,
      refreshToken: localStorage.getItem('refreshToken') || null,
    },
  },
  reducers: {
    setToken: (state, action) => {
      const { accessToken, refreshToken } = action.payload;
      state.AccRefToken = { accessToken, refreshToken };
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    },
    deleteToken: (state) => {
      state.AccRefToken = { accessToken: null, refreshToken: null };
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },
  },
});

export const { setToken, deleteToken } = AccRefTokenSlice.actions;
export default AccRefTokenSlice.reducer;
