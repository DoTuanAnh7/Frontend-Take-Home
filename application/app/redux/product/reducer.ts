import {Product} from './../../../../backend/dist/Product/product.interface.d';
import {createSlice} from '@reduxjs/toolkit';
import {getProducts} from './actions';

const userSlice = createSlice({
  name: 'product',
  initialState: {
    product: {
      loading: false,
      result: {},
      error: undefined,
    },
  },
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state: any, action) => {
      state.product.loading = true;
    },
    [getProducts.fulfilled]: (state: any, action) => {
      state.product.loading = false;
      state.product.result = action.payload;
    },
    [getProducts.rejected]: (state: any, action) => {
      state.product.loading = false;
      state.product.error = action.payload;
    },
  },
});

export const user = (state: any) => state.product;

export default userSlice.reducer;
