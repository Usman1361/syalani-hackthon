
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './index';
import UserSlice from './UserSlice';

const store = configureStore({
  reducer: UserSlice,
});

export default store;