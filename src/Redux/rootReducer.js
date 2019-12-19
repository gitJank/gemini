import { combineReducers } from 'redux';
import application from './Application/reducer';

const appReducer = combineReducers({
  application
});

export default (state, action) => appReducer({ ...state }, action);
