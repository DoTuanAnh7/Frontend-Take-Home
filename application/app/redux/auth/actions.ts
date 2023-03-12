import {createAsyncThunk} from '@reduxjs/toolkit';
import Config from '../../../config';
import {postApi} from '../api';
import {LOGIN, REGISTER} from './types';

const apiUrl = Config.API_URL;

export const login = createAsyncThunk(
  LOGIN,
  async (params: any, {rejectWithValue}: any) => {
    try {
      const endpoint = `${apiUrl}/auth/login`;
      const {data} = await postApi(endpoint, params.data);
      if (params.onResponse) {
        params.onResponse(data);
      }
      return data;
    } catch (err) {
      const {data} = err.response;
      if (params.onError) {
        params.onError(data);
      }
      return rejectWithValue(data);
    }
  },
);

export const register = createAsyncThunk(
  REGISTER,
  async (params: any, {rejectWithValue}) => {
    try {
      const endpoint = `${apiUrl}/auth/register`;
      const {data} = await postApi(endpoint, params.data);
      if (params.onResponse) {
        params.onResponse(data);
      }
      return data;
    } catch (err) {
      const {data} = err.response;
      if (params.onError) {
        params.onError(data);
      }
      return rejectWithValue(data);
    }
  },
);
