import { combineReducers } from 'redux';
import { plantsReducer } from './plantsReducer';
import { accountReducer } from './accountReducer';

export default combineReducers({
  plantsReducer,
  accountReducer
});