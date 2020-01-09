import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '../../../utils/test-utils';
import ScopesSelectionView from './ScopesSelectionView';

describe('ScopesSelectionView', () => {
  let renderNode;

  const expected = {
    assignedScopes: ['1'],
    scopes: [
      { id: '1', name: 'scope-1' },
      { id: '2', name: 'scopes-2' }
    ]
  };

  beforeEach(() => {
    const defaultProps = {
      show: true,
      scopes: expected.scopes,
      assignedScopes: expected.assignedScopes
    };

    renderNode = (props = defaultProps) =>
      render(<ScopesSelectionView {...props} />);
  });

  it('renders', () => {
    renderNode();
  });

  it('displays provided scope names', () => {
    const { getByText } = renderNode();

    expected.scopes.map(scope => getByText(scope.name));
  });

  it('toggles scope selection on table row click', () => {
    const { getByTestId } = renderNode();
    const firstScope = getByTestId('scope-checkbox-1');
    const secondScope = getByTestId('scope-checkbox-2');

    expect(firstScope.checked).toBeTruthy();
    expect(secondScope.checked).toBeFalsy();

    fireEvent.click(firstScope);
    fireEvent.click(secondScope);

    expect(firstScope.checked).toBeFalsy();
    expect(secondScope.checked).toBeTruthy();
  });

  it('disables save changes button if no changes have been made', () => {
    const { getByTestId, getByText } = renderNode();
    const saveChangesBtn = getByText(/save changes/i).closest('button');
    const firstScope = getByTestId('scope-checkbox-1');

    expect(saveChangesBtn).toBeDisabled();
    fireEvent.click(firstScope);
    expect(saveChangesBtn).toBeEnabled();
    fireEvent.click(firstScope);
    expect(saveChangesBtn).toBeDisabled();
  });
});
