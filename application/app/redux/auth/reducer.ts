import {createSlice} from '@reduxjs/toolkit';
import {login, register} from './actions';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login: {
      loading: false,
      result: {},
      error: undefined,
    },

    register: {
      loading: false,
      result: {},
      error: undefined,
    },
  },
  reducers: {},
  extraReducers: {
    //login
    [login.pending]: (state, action) => {
      state.login.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.login.loading = false;
      state.login.result = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.login.loading = false;
      state.login.error = action.payload;
    },


    //register
    [register.pending]: (state, action) => {
      state.register.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.register.loading = false;
      state.register.result = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.register.loading = false;
      state.register.error = action.payload;
    },
  },
});

export const auth = state => state.auth;

export default authSlice.reducer;
