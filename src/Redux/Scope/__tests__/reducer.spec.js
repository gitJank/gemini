import roleReducer from '../reducer';
import * as actions from '../actions';

describe('scopes reducer', () => {
  it('RECIEVED_SCOPES', () => {
    const payload = [{ id: '1' }, { id: '2' }, { id: '3' }];

    const { scopes } = roleReducer(undefined, actions.recievedScopes(payload));

    expect(scopes).toStrictEqual(payload);
  });

  it('RECIEVED_ASSIGNED_SCOPES', () => {
    const payload = ['1', '2', '3'];

    const { assignedScopes } = roleReducer(
      undefined,
      actions.recievedAssignedScopes(payload)
    );

    expect(assignedScopes).toStrictEqual(payload);
  });

  it('SCOPES_CLEARED', () => {
    const { scopes, assignedScopes } = roleReducer(
      undefined,
      actions.clearScopes()
    );

    expect(scopes).toBe(null);
    expect(assignedScopes).toBe(null);
  });

  it('ASSIGNED_SCOPES_CLEARED', () => {
    const { assignedScopes } = roleReducer(
      undefined,
      actions.clearAssignedScopes()
    );

    expect(assignedScopes).toBe(null);
  });

  it('RECIEVED_ERROR', () => {
    const payload = { message: 'error text' };

    const { error } = roleReducer(undefined, actions.recievedError(payload));

    expect(error).toBe(payload.message);
  });
});
