import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {},
  productRequests: [],
};

export const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    feedbackReceived: (feedback, action) => {
      feedback.currentUser = action.payload.currentUser;
      feedback.productRequests = action.payload.productRequests;
    },
  },
});

export const { feedbackReceived } = feedbackSlice.actions;

export default feedbackSlice.reducer;
