import constants from './constants';

const initialState = {
  roles: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.RECIEVED_ROLES:
      return {
        ...state,
        roles: payload
      };
    case constants.RECIEVED_ERROR:
      return { ...state, error: payload.message };
    default:
      return state;
  }
};
