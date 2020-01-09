import constants from '../constants';
import * as actions from '../actions';

describe('scope actions', () => {
  it('recievedScopes returns { type: RECIEVED_SCOPES, payload }', () => {
    const expectedPayload = 'payload';

    const { type, payload } = actions.recievedScopes(expectedPayload);

    expect(type).toBe(constants.RECIEVED_SCOPES);
    expect(payload).toBe(expectedPayload);
  });

  it('recievedAssignedScopes returns { type: RECIEVED_ASSIGNED_SCOPES, payload }', () => {
    const expectedPayload = 'payload';

    const { type, payload } = actions.recievedAssignedScopes(expectedPayload);

    expect(type).toBe(constants.RECIEVED_ASSIGNED_SCOPES);
    expect(payload).toBe(expectedPayload);
  });

  it('clearScopes returns { type: SCOPES_CLEARED }', () => {
    const { type } = actions.clearScopes();

    expect(type).toBe(constants.SCOPES_CLEARED);
  });

  it('clearAssignedScopes returns { type: ASSIGNED_SCOPES_CLEARED }', () => {
    const { type } = actions.clearAssignedScopes();

    expect(type).toBe(constants.ASSIGNED_SCOPES_CLEARED);
  });

  it('recievedError returns { type: RECIEVED_ERROR, payload }', () => {
    const expectedPayload = 'error text';

    const { type, payload } = actions.recievedError(expectedPayload);

    expect(type).toBe(constants.RECIEVED_ERROR);
    expect(payload).toBe(expectedPayload);
  });
});
