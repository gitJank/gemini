import roleReducer from '../reducer';
import * as actions from '../actions';

describe('account reducer', () => {
  it('RECIEVED_ROLES', () => {
    const payload = [{ id: '1' }, { id: '2' }, { id: '3' }];

    const { roles } = roleReducer(undefined, actions.recievedRoles(payload));

    expect(JSON.stringify(roles)).toBe(JSON.stringify(payload));
  });

  it('ROLE_SELECTED', () => {
    const payload = '1';

    const { selectedRole } = roleReducer(
      undefined,
      actions.selectRole(payload)
    );

    expect(selectedRole).toBe(payload);
  });

  it('ROLES_CLEARED', () => {
    const { roles, selectedRole } = roleReducer(
      undefined,
      actions.clearRoles()
    );

    expect(selectedRole).toBe(null);
    expect(roles).toBe(null);
  });

  it('SELECTED_ROLE_CLEARED', () => {
    const { selectedRole } = roleReducer(
      undefined,
      actions.clearSelectedRole()
    );

    expect(selectedRole).toBe(null);
  });

  it('RECIEVED_ERROR', () => {
    const payload = { message: 'error text' };

    const { error } = roleReducer(undefined, actions.recievedError(payload));

    expect(error).toBe(payload.message);
  });
});
