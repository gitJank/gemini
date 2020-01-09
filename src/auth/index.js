import React from 'react';
import decodeJWT from 'jwt-decode';
import {
  getAccessToken,
  getIdToken,
  logout,
  editProfile,
  initialize,
  run
} from 'ascensionid-b2c-sdk-client';

export const AuthContext = React.createContext(null);

export const withAuth = Component => props => (
  <AuthContext.Consumer>
    {auth => auth.isLoggedIn() && <Component {...props} auth={auth} />}
  </AuthContext.Consumer>
);

const decodeToken = token =>
  token ? decodeJWT(token) : { error: 'No token present' };

export default {
  initialize,
  run,
  editProfile,
  logout,
  getAccessToken,
  isLoggedIn: () => !!getIdToken(),
  getDecodedIdToken: () => decodeToken(getIdToken()),
  get currentUser() {
    const user = { ...this.getDecodedIdToken() };

    return {
      name: user.name,
      emails: user.emails,
      firstName: user.given_name,
      lastName: user.family_name,
      roles: user.user_roles
    };
  },
  isAuthorized(roles) {
    return this.currentUser.roles.some(userRole => roles.includes(userRole));
  }
};
