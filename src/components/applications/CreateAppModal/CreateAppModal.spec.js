import React from 'react';
import { fireEvent, wait } from '@testing-library/react';
import { render, fillInput } from '../../../utils/test-utils';
import { CreateAppModalBase } from './CreateAppModal';

const handleCloseCreateApplication = jest.fn();
const handleCreateApplication = jest.fn();

const expected = {
  appName: 'test-app-name',
  appId: 'test-app-id'
};

describe('CreateAppModal', () => {
  let renderNode;

  beforeEach(() => {
    const expectedProps = {
      open: true,
      handleCloseCreateApplication,
      handleCreateApplication
    };

    renderNode = (props = expectedProps) =>
      render(<CreateAppModalBase {...props} />);
  });

  it('displays header', () => {
    const { getByText } = renderNode();
    getByText('Create Application');
  });

  it('calls handleCloseCreateApplication when cancel button is clicked', () => {
    const { getByText } = renderNode();

    fireEvent.click(getByText(/cancel/i));

    expect(handleCloseCreateApplication).toHaveBeenCalled();
  });

  it('calls handleCreateApplication on submit with appId and appName if form is valid', async () => {
    const { getByText, getByTestId } = renderNode();

    fillInput(getByTestId('application-name'), expected.appName);
    fillInput(getByTestId('application-id'), expected.appId);

    fireEvent.submit(getByText(/submit/i));

    await wait(() =>
      expect(handleCreateApplication).toHaveBeenCalledWith(
        expected.appId,
        expected.appName
      )
    );
  });
});
