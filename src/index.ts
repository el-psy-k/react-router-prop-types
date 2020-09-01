import * as PropTypes from 'prop-types';

export const location = PropTypes.shape({
  hash: PropTypes.string.isRequired,
  key: PropTypes.string, // only in createBrowserHistory and createMemoryHistory
  pathname: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  state: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
  ]), // only in createBrowserHistory and createMemoryHistory
});

export const history = PropTypes.shape({
  action: PropTypes.oneOf(['PUSH', 'REPLACE', 'POP']).isRequired,
  block: PropTypes.func.isRequired,
  createHref: PropTypes.func.isRequired,
  go: PropTypes.func.isRequired,
  goBack: PropTypes.func, // only in server side rendering
  goForward: PropTypes.func, // only in server side rendering
  back: PropTypes.func, // only in client side rendering
  forward: PropTypes.func, // only in client side rendering
  index: PropTypes.number, // only in createMemoryHistory
  length: PropTypes.number,
  listen: PropTypes.func.isRequired,
  location: location.isRequired,
  push: PropTypes.func.isRequired,
  replace: PropTypes.func.isRequired,
});

export const match = PropTypes.shape({
  isExact: PropTypes.bool,
  params: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

const routeShape: any = {
  path: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  exact: PropTypes.bool,
  strict: PropTypes.bool,
  sensitive: PropTypes.bool,
  component: PropTypes.func,
};
routeShape.routes = PropTypes.arrayOf(PropTypes.shape(routeShape));

export const route = PropTypes.shape(routeShape);

export default {
  location,
  history,
  match,
  route,
};
