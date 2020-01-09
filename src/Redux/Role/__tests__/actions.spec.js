import constants from '../constants';
import * as actions from '../actions';

describe('role actions', () => {
  it('recievedRoles returns { type: RECIEVED_ROLES, payload }', () => {
    const expectedPayload = 'payload';

    const { type, payload } = actions.recievedRoles(expectedPayload);

    expect(type).toBe(constants.RECIEVED_ROLES);
    expect(payload).toBe(expectedPayload);
  });

  it('selectRole returns { type: ROLE_SELECTED, payload }', () => {
    const expectedPayload = 'payload';

    const { type, payload } = actions.selectRole(expectedPayload);

    expect(type).toBe(constants.ROLE_SELECTED);
    expect(payload).toBe(expectedPayload);
  });

  it('clearRoles returns { type: ROLES_CLEARED }', () => {
    const { type } = actions.clearRoles();

    expect(type).toBe(constants.ROLES_CLEARED);
  });

  it('clearSelectedRole returns { type: SELECTED_ROLE_CLEARED }', () => {
    const { type } = actions.clearSelectedRole();

    expect(type).toBe(constants.SELECTED_ROLE_CLEARED);
  });

  it('recievedError returns { type: RECIEVED_ERROR, payload }', () => {
    const expectedPayload = 'error text';

    const { type, payload } = actions.recievedError(expectedPayload);

    expect(type).toBe(constants.RECIEVED_ERROR);
    expect(payload).toBe(expectedPayload);
  });
});
