import axios from 'axios';
import constants from './constants';

const apiUri = process.env.REACT_APP_API_URI;

// action creators
export const recievedApplications = payload => ({
  type: constants.RECIEVED_APPLICATIONS,
  payload
});

export const setSelectedApp = payload => ({
  type: constants.SET_SELECTED_APP,
  payload
});

export const openCreateApplication = () => ({
  type: constants.OPEN_CREATE_APPLICATION
});

export const closeCreateApplication = () => ({
  type: constants.CLOSE_CREATE_APPLICATION
});

export const isLoading = () => ({
  type: constants.IS_LOADING
});

export const recievedError = payload => ({
  type: constants.RECIEVED_ERROR,
  payload
});

// side effects
export const getApplications = () => dispatch =>
  axios
    .get(`${apiUri}/apps`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => dispatch(recievedApplications(res.data)))
    .catch(err => dispatch(recievedError(err)));

export const createApplication = (appId, appName) => dispatch =>
  axios
    .post(`${apiUri}/apps`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        appId,
        appName
      }
    })
    .then(res => dispatch(recievedApplications(res.data)))
    .catch(err => dispatch(recievedError(err)));
