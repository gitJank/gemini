import appReducer from '../reducer';
import * as actions from '../actions';

describe('account reducer', () => {
  it('RECIEVED_APPLICATIONS', () => {
    const payload = ['1', '2', '3'];

    const { applications, isCreateApplicationOpen } = appReducer(
      undefined,
      actions.recievedApplications(payload)
    );

    expect(JSON.stringify(applications)).toBe(JSON.stringify(payload));
    expect(isCreateApplicationOpen).toBe(false);
  });

  it('OPEN_CREATE_APPLICATION', () => {
    const { selectedApp, isCreateApplicationOpen } = appReducer(
      undefined,
      actions.openCreateApplication()
    );

    expect(selectedApp).toBe('');
    expect(isCreateApplicationOpen).toBe(true);
  });

  it('CLOSE_CREATE_APPLICATION', () => {
    const { isCreateApplicationOpen } = appReducer(
      undefined,
      actions.closeCreateApplication()
    );

    expect(isCreateApplicationOpen).toBe(false);
  });

  it('SET_SELECTED_APP', () => {
    const payload = 'selected-app-id';

    const { selectedApp } = appReducer(
      undefined,
      actions.setSelectedApp(payload)
    );

    expect(selectedApp).toBe(payload);
  });

  it('RECIEVED_ERROR', () => {
    const payload = { message: 'error text' };

    const { error } = appReducer(undefined, actions.recievedError(payload));

    expect(error).toBe(payload.message);
  });
});
