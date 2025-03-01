import { configureStore } from '@reduxjs/toolkit';
import countReducer from '../reducer/countReducer';
import authReducer from '../reducer/authReducer';

export const store = configureStore({
  reducer: {
    count: countReducer,
    auth: authReducer,
  },
});
