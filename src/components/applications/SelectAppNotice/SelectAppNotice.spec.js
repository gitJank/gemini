import React from 'react';
import { render } from '../../../utils/test-utils';
import { SelectAppNoticeBase } from './SelectAppNotice';

describe('SelectAppNotice', () => {
  let renderNode;

  beforeEach(() => {
    const defaultProps = {
      show: true
    };

    renderNode = (props = defaultProps) =>
      render(<SelectAppNoticeBase {...props} />);
  });

  it('renders message if noAppSelected is true', () => {
    const { getByText } = renderNode();
    getByText('Please Select an Application');
  });

  it('renders nothing if noAppSelected is false', () => {
    const { container } = renderNode({ show: false });

    expect(container.firstChild).toBeFalsy();
  });
});
