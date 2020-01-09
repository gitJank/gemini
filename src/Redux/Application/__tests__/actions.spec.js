import constants from '../constants';
import * as actions from '../actions';

describe('application actions', () => {
  it('recievedApplications returns { type: RECIEVED_APPLICATIONS, payload }', () => {
    const expectedPayload = 'payload';

    const { type, payload } = actions.recievedApplications(expectedPayload);

    expect(type).toBe(constants.RECIEVED_APPLICATIONS);
    expect(payload).toBe(expectedPayload);
  });

  it('setSelectedApp returns { type: SET_SELECTED_APP, payload }', () => {
    const expectedPayload = 'payload';

    const { type, payload } = actions.setSelectedApp(expectedPayload);

    expect(type).toBe(constants.SET_SELECTED_APP);
    expect(payload).toBe(expectedPayload);
  });

  it('openCreateApplication returns { type: OPEN_CREATE_APPLICATION }', () => {
    const { type } = actions.openCreateApplication();

    expect(type).toBe(constants.OPEN_CREATE_APPLICATION);
  });

  it('closeCreateApplication returns { type: CLOSE_CREATE_APPLICATION }', () => {
    const { type } = actions.closeCreateApplication();

    expect(type).toBe(constants.CLOSE_CREATE_APPLICATION);
  });

  it('recievedError returns { type: RECIEVED_ERROR, payload }', () => {
    const expectedPayload = 'error text';

    const { type, payload } = actions.recievedError(expectedPayload);

    expect(type).toBe(constants.RECIEVED_ERROR);
    expect(payload).toBe(expectedPayload);
  });
});
