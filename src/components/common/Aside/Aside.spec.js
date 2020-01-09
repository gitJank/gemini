import React from 'react';
import { Router } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { render } from '../../../utils/test-utils';
import Aside from './Aside';

describe('Aside', () => {
  let renderNode;
  const history = createMemoryHistory({ initialEntries: ['/not-found'] });

  beforeEach(() => {
    const defaultProps = {};

    renderNode = (props = defaultProps) =>
      render(
        <Router history={history}>
          <Aside {...props} />
        </Router>
      );
  });

  it('pushes navigation to "/" when List item with text "Roles" is clicked', () => {
    const { getByText } = renderNode();

    fireEvent.click(getByText('Roles'));

    expect(history.location.pathname).toBe('/');
  });

  it('pushes navigation to "/scopes" when List item with text "Scopes" is clicked', () => {
    const { getByText } = renderNode();

    fireEvent.click(getByText('Scopes'));

    expect(history.location.pathname).toBe('/scopes');
  });
});
