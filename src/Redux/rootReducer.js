import { combineReducers } from 'redux';
import application from './Application/reducer';
import role from './Role/reducer';
import scope from './Scope/reducer';

const appReducer = combineReducers({
  application,
  role,
  scope
});

export default (state, action) => appReducer({ ...state }, action);
