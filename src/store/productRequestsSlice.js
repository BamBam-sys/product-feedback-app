import { createSlice, current } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  currentUser: {},
  productRequests: [],
};

export const productRequestsSlice = createSlice({
  name: 'productRequests',
  initialState,
  reducers: {
    productRequestsReceived: (state, action) => {
      state.currentUser = action.payload.currentUser;
      state.productRequests = action.payload.productRequests;
    },

    commentReceived: (state, { payload: { id, comment } }) => {
      const index = state.productRequests.findIndex((req) => req.id === +id);
      const request = state.productRequests[index];
      request.comments = [...request.comments, comment];
    },

    replyReceived: (state, { payload: { id, reply, commentId } }) => {
      const index = state.productRequests.findIndex((req) => req.id === +id);
      const request = state.productRequests[index];
      const commnetIndex = request.comments.findIndex(
        (com) => com.id === commentId
      );
      const comment = request.comments[commnetIndex];
      if (comment.replies) {
        comment.replies = [...comment.replies, reply];
      } else {
        comment.replies = [reply];
      }
    },
  },
});

export const { productRequestsReceived, commentReceived, replyReceived } =
  productRequestsSlice.actions;

export default productRequestsSlice.reducer;

// selectors

export const selectProductRequests = (state) => {
  return state.productRequestsReducer.productRequests;
};

export const selectRequest = (state, id) => {
  return state.productRequestsReducer.productRequests.filter(
    (item) => item.id === id
  );
};

export const selectUser = (state) => {
  return state.productRequestsReducer.currentUser;
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
