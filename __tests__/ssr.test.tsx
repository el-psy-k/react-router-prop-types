import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, Route } from 'react-router';
import { renderRoutes } from 'react-router-config';
import ReactRouterPropTypes from '../src';

describe('server side rendering', () => {
  const warning = expect.stringMatching(/(Invalid prop|Failed prop type)/gi);

  test('simple ssr', () => {
    spyOn(console, 'error');
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
    ReactDOMServer.renderToString(
      <StaticRouter context={{}}>
        <Route component={TestComponent} />
      </StaticRouter>
    );
    expect(console.error).not.toHaveBeenCalledWith(warning);
  });

  test('react-router-config', () => {
    spyOn(console, 'error');
    class TestComponent extends React.Component {
      static propTypes = {
        history: ReactRouterPropTypes.history.isRequired,
        location: ReactRouterPropTypes.location.isRequired,
        match: ReactRouterPropTypes.match.isRequired,
        route: ReactRouterPropTypes.route.isRequired,
      }
      render() {
        return null;
      }
    }
    const routes = [
      {
        path: '/root',
        component: TestComponent,
        routes: [
          {
            path: '/child',
            component: TestComponent,
          }
        ],
      }
    ];
    ReactDOMServer.renderToString(
      <StaticRouter context={{}} location="/root">
        {renderRoutes(routes)}
      </StaticRouter>
    );
    expect(console.error).not.toHaveBeenCalledWith(warning);
  });
});
