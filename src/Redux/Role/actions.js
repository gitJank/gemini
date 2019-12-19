import axios from 'axios';
import constants from './constants';

const apiUri = process.env.REACT_APP_API_URI;

// action creators
export const recievedRoles = payload => ({
  type: constants.RECIEVED_ROLES,
  payload
});

export const recievedError = payload => ({
  type: constants.RECIEVED_ERROR,
  payload
});

// side effects
export const getRoles = appId => dispatch =>
  axios
    .get(`${apiUri}/roles/${appId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => dispatch(recievedRoles(res.data)))
    .catch(err => dispatch(recievedError(err)));
