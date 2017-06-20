# react-router-prop-types

Runtime type checking for [react-router](https://github.com/ReactTraining/react-router) props

## Installation

```shell
npm install react-router-prop-types --save
```

## Importing

```js
import ReactRouterPropTypes from 'react-router-prop-types'; // ES2015
const ReactRouterPropTypes = require('react-router-prop-types'); // CommonJS
```

## Usage

```jsx
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

class MyComponent extends React.Component {
  render() {
    // ...
  }
}

MyComponent.propTypes = {
  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  computedMatch: ReactRouterPropTypes.match.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};
```
