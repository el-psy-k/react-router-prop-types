import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createBrowserHistory, createHashHistory, createMemoryHistory } from 'history';
import ReactRouterPropTypes from '../src';

describe('client side rendering', () => {
  const node = document.createElement('div');

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(node);
  });

  class TestComponent extends React.Component {
    static propTypes = {
      history: ReactRouterPropTypes.history.isRequired,
      location: ReactRouterPropTypes.location.isRequired,
      match: ReactRouterPropTypes.match.isRequired,
    }
    render() {
      return null;
    }
  }

  test('browser history', () => {
    spyOn(console, 'error');
    ReactDOM.render(
      <Router history={createBrowserHistory()}>
        <Route component={TestComponent} />
      </Router>,
      node,
    );
    expect(console.error).not.toBeCalled();
  });

  test('hash history', () => {
    spyOn(console, 'error');
    ReactDOM.render(
      <Router history={createHashHistory()}>
        <Route component={TestComponent} />
      </Router>,
      node,
    );
    expect(console.error).not.toBeCalled();
  });

  test('memory history', () => {
    spyOn(console, 'error');
    ReactDOM.render(
      <Router history={createMemoryHistory()}>
        <Route component={TestComponent} />
      </Router>,
      node,
    );
    expect(console.error).not.toBeCalled();
  });
});
