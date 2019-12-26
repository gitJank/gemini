import constants from './constants';

const initialState = {
  roles: null,
  selectedRole: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.RECIEVED_ROLES:
      return {
        ...state,
        roles: payload
      };
    case constants.ROLE_SELECTED:
      return {
        ...state,
        selectedRole: payload
      };
    case constants.ROLES_CLEARED:
      return {
        ...initialState
      };
    case constants.SELECTED_ROLE_CLEARED:
      return {
        ...state,
        selectedRole: null
      };
    case constants.RECIEVED_ERROR:
      return { ...state, error: payload.message };
    default:
      return state;
  }
};
