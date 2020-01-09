import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render, fillInput } from '../../../utils/test-utils';
import RolesView from './RolesView';

describe('RolesView', () => {
  let renderNode;

  const handleSelectRole = jest.fn();
  const handleCreateRole = jest.fn();

  const expected = {
    selectedApp: '1',
    selectedRole: '1',
    newRoleName: 'new-role',
    roles: [
      { id: '1', name: 'role-1' },
      { id: '2', name: 'role-2' }
    ]
  };

  const defaultProps = {
    roles: expected.roles,
    selectedApp: expected.selectedApp,
    handleSelectRole,
    handleCreateRole
  };

  beforeEach(() => {
    renderNode = (props = defaultProps) => render(<RolesView {...props} />);
  });

  it('renders', () => {
    renderNode();
  });

  it('displays provided role names', () => {
    const { getByText } = renderNode();

    expected.roles.map(role => getByText(role.name));
  });

  it('calls handleSelectRole with selected role id when a role is clicked', () => {
    const { getByText } = renderNode();
    const expectedRole = expected.roles[0];

    fireEvent.click(getByText(expectedRole.name));

    expect(handleSelectRole).toHaveBeenCalledWith(expectedRole.id);
  });

  it('shows add role table row and cancel button when add button is clicked', () => {
    const { getByTestId, queryByTestId } = renderNode();

    fireEvent.click(getByTestId('add-btn'));

    expect(queryByTestId('cancel-btn')).toBeTruthy();
    expect(queryByTestId('name-input')).toBeTruthy();
    expect(queryByTestId('add-btn')).toBeFalsy();
  });

  it('hides add role table row and shows add button when cancel button is clicked', () => {
    const { getByTestId, queryByTestId } = renderNode();

    fireEvent.click(getByTestId('add-btn'));
    fireEvent.click(getByTestId('cancel-btn'));

    expect(queryByTestId('cancel-btn')).toBeFalsy();
    expect(queryByTestId('name-input')).toBeFalsy();
    expect(queryByTestId('add-btn')).toBeTruthy();
  });

  it('calls handleCreateRole with data and clears role name on save btn click if input is valid ', () => {
    const { getByTestId, queryByText } = renderNode();

    fireEvent.click(getByTestId('add-btn'));
    fillInput(getByTestId('name-input'), expected.newRoleName);
    fireEvent.click(getByTestId('save-changes-btn'));

    expect(queryByText(expected.newRoleName)).toBeFalsy();
    expect(handleCreateRole).toHaveBeenCalledWith(
      expected.newRoleName,
      expected.selectedApp
    );
  });
});
