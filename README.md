# react-router-prop-types

Runtime type checking for [react-router](https://github.com/ReactTraining/react-router) props

## Installation

```shell
npm install react-router-prop-types --save
```

## Usage

```jsx
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

class MyComponent extends React.Component {
  static propTypes = {
    // You can chain any of the above with `isRequired` to make sure a warning
    // is shown if the prop isn't provided.
    history: ReactRouterPropTypes.history.isRequired,
    location: ReactRouterPropTypes.location.isRequired,
    match: ReactRouterPropTypes.match.isRequired,
    route: ReactRouterPropTypes.route.isRequired, // for react-router-config
  }
  render() {
    // ...
  }
}
```
