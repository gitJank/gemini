import React from 'react';
import { render } from '../../../utils/test-utils';
import { AuthContext } from '../../../auth';
import NavBar from './NavBar';

describe('NavBar', () => {
  let renderNode;

  const auth = jest.mock('../../../auth');
  auth.logout = jest.fn();
  auth.isLoggedIn = () => true;

  const expected = [
    { id: 'first-id', name: 'first' },
    { id: 'second-id', name: 'second' }
  ];

  const defaultProps = {
    applications: [...expected],
    selectedApp: '',
    setSelectedApp: jest.fn(),
    handleOpenCreateApplication: jest.fn()
  };

  beforeEach(() => {
    renderNode = (props = defaultProps) =>
      render(
        <AuthContext.Provider value={auth}>
          <NavBar {...props} />
        </AuthContext.Provider>
      );
  });

  it('renders', async () => {
    renderNode();
  });
});
