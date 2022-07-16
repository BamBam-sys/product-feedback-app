import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  currentUser: {},
  productRequests: [],
};

export const productRequestsSlice = createSlice({
  name: 'productRequests',
  initialState,
  reducers: {
    productRequestsReceived: (productRequests, action) => {
      productRequests.currentUser = action.payload.currentUser;
      productRequests.productRequests = action.payload.productRequests;
    },
  },
});

export const { productRequestsReceived } = productRequestsSlice.actions;

export default productRequestsSlice.reducer;

// selectors

export const selectProductRequests = (state) => {
  return state.productRequestsReducer.productRequests;
};

export const selectPlannedProductRequests = createSelector(
  (state) => state.productRequestsReducer.productRequests,
  (productRequests) => productRequests.filter((req) => req.status === 'planned')
);

export const selectProductRequestsInProgress = createSelector(
  (state) => state.productRequestsReducer.productRequests,
  (productRequests) =>
    productRequests.filter((req) => req.status === 'in-progress')
);

export const selectLiveProductRequests = createSelector(
  (state) => state.productRequestsReducer.productRequests,
  (productRequests) => productRequests.filter((req) => req.status === 'live')
);
