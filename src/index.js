import React from 'react';
import ReactDOM from 'react-dom';
import auth from './auth';
import './index.css';
import App from './App/App';

auth.initialize({
  instance: process.env.REACT_APP_INSTANCE,
  tenant: process.env.REACT_APP_TENANT,
  signInPolicy: process.env.REACT_APP_SIGN_IN_POLICY,
  editProfilePolicy: process.env.REACT_APP_EDIT_PROFILE_POLICY,
  applicationId: process.env.REACT_APP_APPLICATION_ID,
  cacheLocation: 'localStorage',
  scopes: [process.env.REACT_APP_SCOPE],
  redirectUri: process.env.REACT_APP_REDIRECT_URI,
  postLogoutRedirectUri: process.env.REACT_APP_REDIRECT_URI
});

auth.run(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
