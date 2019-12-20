import constants from './constants';

const initialState = {
  scopes: null,
  assignedScopes: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.RECIEVED_SCOPES:
      return {
        ...state,
        scopes: payload
      };
    case constants.RECIEVED_ASSIGNED_SCOPES:
      return {
        ...state,
        assignedScopes: [...payload]
      };
    case constants.ASSIGNED_SCOPES_CLEARED:
      return {
        ...state,
        assignedScopes: null
      };

    case constants.RECIEVED_ERROR:
      return { ...state, error: payload.message };
    default:
      return state;
  }
};
