import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getIsAuthorized } from '../store/selectors/usersSelectors';

const propTypes = {
  component: PropTypes.oneOfType([PropTypes.shape(), PropTypes.func]).isRequired,
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthorized = useSelector(getIsAuthorized);

  return (
    <Route
      {...rest}
      render={(props) => (isAuthorized ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

PrivateRoute.propTypes = propTypes;

export default PrivateRoute;