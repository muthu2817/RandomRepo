import { configureStore } from '@reduxjs/toolkit';
import ExpenseReducer from './ExpenseReducer';

export const store = configureStore({
  reducer: {
    ExpenseReducer:ExpenseReducer
  },
});
