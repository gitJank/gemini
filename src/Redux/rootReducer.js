import { combineReducers } from 'redux';
import application from './Application/reducer';
import role from './Role/reducer';

const appReducer = combineReducers({
  application,
  role
});

export default (state, action) => appReducer({ ...state }, action);
