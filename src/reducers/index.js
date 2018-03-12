import { combineReducers } from 'redux';
import AuthReducer from './auth';

const rootReducer = combineReducers({
  authenticated: AuthReducer
});

export default rootReducer;
