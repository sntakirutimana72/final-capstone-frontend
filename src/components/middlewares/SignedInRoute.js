import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const SignedInRoute = ({ auth, redirectPath, children }) => {
  if (auth) return <Navigate to={redirectPath} replace />;

  return children || <Outlet />;
};

SignedInRoute.defaultProps = {
  children: null,
  redirectPath: '/',
};

SignedInRoute.propTypes = {
  children: PropTypes.node,
  redirectPath: PropTypes.string,
  auth: PropTypes.bool.isRequired,
};

export default SignedInRoute;
