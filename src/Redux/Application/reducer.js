import constants from './constants';

const initialState = {
  applications: null,
  isCreateApplicationOpen: false,
  selectedApp: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.RECIEVED_APPLICATIONS:
      return {
        ...state,
        applications: payload,
        isCreateApplicationOpen: false
      };
    case constants.OPEN_CREATE_APPLICATION:
      return {
        ...state,
        selectedApp: '',
        isCreateApplicationOpen: true
      };
    case constants.CLOSE_CREATE_APPLICATION:
      return {
        ...state,
        isCreateApplicationOpen: false
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
