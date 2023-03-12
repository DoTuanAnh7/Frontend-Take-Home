import {combineReducers, configureStore} from '@reduxjs/toolkit';


import authReducer from './auth/reducer';
import userReducer from './product/reducer';


const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
});

export const setupStore = preloadedState => {
  return configureStore({
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    preloadedState,
    reducer: rootReducer,
  });
};
