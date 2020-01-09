import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '../../../utils/test-utils';
import ScopesView from './ScopesView';

describe('ScopesView', () => {
  let renderNode;

  const handleCreateScope = jest.fn();

  const expected = {
    selectedApp: '1',
    newScopeName: 'new-scope',
    scopes: [
      { id: '1', name: 'scope-1' },
      { id: '2', name: 'scope-2' }
    ]
  };

  beforeEach(() => {
    const defaultProps = {
      scopes: expected.scopes,
      selectedApp: expected.selectedApp,
      handleCreateScope
    };

    renderNode = (props = defaultProps) => render(<ScopesView {...props} />);
  });

  it('renders', () => {
    renderNode();
  });

  it('displays provided scope names', () => {
    const { getByText } = renderNode();

    expected.scopes.map(scope => getByText(scope.name));
  });

  it('shows add scope table row and cancel button when add button is clicked', () => {
    const { getByTestId, queryByTestId } = renderNode();

    fireEvent.click(getByTestId('add-btn'));

    expect(queryByTestId('cancel-btn')).toBeTruthy();
    expect(queryByTestId('name-input')).toBeTruthy();
    expect(queryByTestId('add-btn')).toBeFalsy();
  });

  it('hides add scope table row and shows add button when cancel button is clicked', () => {
    const { getByTestId, queryByTestId } = renderNode();

    fireEvent.click(getByTestId('add-btn'));
    fireEvent.click(getByTestId('cancel-btn'));

    expect(queryByTestId('cancel-btn')).toBeFalsy();
    expect(queryByTestId('name-input')).toBeFalsy();
    expect(queryByTestId('add-btn')).toBeTruthy();
  });

  /*
  it('calls handleCreateScope with data and clears scope name on save btn click if input is valid ',
   () => {
    window.HTMLElement.prototype.scrollIntoView = () => {};
    const { getByTestId, queryByText } = renderNode();

    fireEvent.click(getByTestId('add-btn'));

    setTimeout(() => {
      fillInput(getByTestId('name-input'), expected.newScopeName);
      fireEvent.click(getByTestId('save-changes-btn'));

      expect(queryByText(expected.newScopeName)).toBeFalsy();
      expect(handleCreateScope).toHaveBeenCalledWith(
        expected.newScopeName,
        expected.selectedApp
      );
    }, 1000);
  });
  */
});
