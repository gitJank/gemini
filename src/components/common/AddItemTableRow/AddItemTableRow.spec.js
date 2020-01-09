import React from 'react';
import { fireEvent } from '@testing-library/react';
import { Table, TableBody } from '@material-ui/core';
import { render, fillInput } from '../../../utils/test-utils';
import AddItemTableRow from './AddItemTableRow';

describe('AddItemTableRow', () => {
  let renderNode;

  const setInputValue = jest.fn();
  const saveChanges = jest.fn();
  const handleClose = jest.fn();

  const defaultProps = {
    inputValue: '',
    setInputValue,
    saveChanges,
    handleClose
  };

  beforeEach(() => {
    jest.resetAllMocks();

    renderNode = (props = defaultProps) =>
      render(
        <Table>
          <TableBody>
            <AddItemTableRow {...props} />
          </TableBody>
        </Table>
      );
  });

  it('calls saveChanges with textFeild value when Check Icon is clicked and input value is truthy', () => {
    const { getByTestId } = renderNode({ ...defaultProps, inputValue: 'test' });

    fireEvent.click(getByTestId('save-changes-btn'));

    expect(saveChanges).toHaveBeenCalled();
  });

  it('does not call saveChanges when Check Icon is clicked if inputValue is falsy', () => {
    const { getByTestId } = renderNode({ ...defaultProps, inputValue: '' });

    fireEvent.click(getByTestId('save-changes-btn'));

    expect(saveChanges).toHaveBeenCalledTimes(0);
  });

  it('calls setInputValue with input value on Name Input change', () => {
    const expectedName = 'test-name';
    const { getByTestId } = renderNode({
      ...defaultProps,
      inputValue: ''
    });

    fillInput(getByTestId('name-input'), expectedName);

    expect(setInputValue).toHaveBeenCalledWith(expectedName);
  });

  it('calls handleClose when Close Icon is clicked', () => {
    const { getByTestId } = renderNode();

    fireEvent.click(getByTestId('close-btn'));

    expect(handleClose).toHaveBeenCalled();
  });
});
