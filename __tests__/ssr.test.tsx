import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, Route } from 'react-router';
import ReactRouterPropTypes from '../src';

test('server side rendering', () => {
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

  spyOn(console, 'error');

  ReactDOMServer.renderToString(
    <StaticRouter context={{}}>
      <Route component={TestComponent} />
    </StaticRouter>
  );

  expect(console.error).not.toBeCalled();
});
