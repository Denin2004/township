import { useLocation } from 'react-router-dom';
import React, {Component} from 'react';

const withRouter = (Child) => {
  return function withRouter(props) {
    const location = useLocation();
    // other relevant props
    // ...
    return <Child {...props} location={location} />;
  };
};

export default withRouter;