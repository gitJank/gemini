import axios from 'axios';
import constants from './constants';

const apiUri = process.env.REACT_APP_API_URI;

// action creators
export const recievedScopes = payload => ({
  type: constants.RECIEVED_SCOPES,
  payload
});

export const recievedAssignedScopes = payload => ({
  type: constants.RECIEVED_ASSIGNED_SCOPES,
  payload
});

export const clearScopes = () => ({
  type: constants.SCOPES_CLEARED
});

export const clearAssignedScopes = () => ({
  type: constants.ASSIGNED_SCOPES_CLEARED
});

export const recievedError = payload => ({
  type: constants.RECIEVED_ERROR,
  payload
});

// side effects
export const getScopes = appId => dispatch =>
  axios
    .get(`${apiUri}/scopes/${appId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => dispatch(recievedScopes(res.data)))
    .catch(err => dispatch(recievedError(err)));

export const getAssignedScopes = (appId, roleId) => dispatch =>
  axios
    .get(`${apiUri}/scopes/${appId}/${roleId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => dispatch(recievedAssignedScopes(res.data)))
    .catch(err => dispatch(recievedError(err)));
