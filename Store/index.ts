
import { combineReducers } from 'redux';
import UserSlice from './UserSlice';
import counterReducer from './UserSlice';

const rootReducer = combineReducers({
  User: counterReducer,
});

export default rootReducer;

