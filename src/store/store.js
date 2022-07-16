import { configureStore } from '@reduxjs/toolkit';
import productRequestsReducer from './productRequestsSlice';

export const store = configureStore({
  reducer: { productRequestsReducer },
});
