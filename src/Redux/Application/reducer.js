import constants from './constants';

const initialState = {
  applications: null,
  selectedApp: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.RECIEVED_APPLICATIONS:
      return {
        ...state,
        applications: payload
      };
    case constants.SET_SELECTED_APP:
      return {
        ...state,
        selectedApp: payload
      };
    case constants.RECIEVED_ERROR:
      return { ...state, error: payload.message };
    default:
      return state;
  }
};
