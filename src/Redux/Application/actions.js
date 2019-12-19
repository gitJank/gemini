import axios from 'axios';
import constants from './constants';

const apiUri = process.env.REACT_APP_API_URI;

// action creators
export const recievedApplications = payload => ({
  type: constants.RECIEVED_APPLICATIONS,
  payload
});

export const recievedError = payload => ({
  type: constants.RECIEVED_ERROR,
  payload
});

// side effects
export const getApplications = () => dispatch =>
  axios
    .get(`${apiUri}/apps`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => dispatch(recievedApplications(res.data)))
    .catch(err => dispatch(recievedError(err)));
