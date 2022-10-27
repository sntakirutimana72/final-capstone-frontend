import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const SignedInRoute = ({ user, redirectPath, children }) => {
  if (user) return <Navigate to={redirectPath} replace />;

  return children || <Outlet />;
};

SignedInRoute.defaultProps = {
  user: null,
  children: null,
  redirectPath: '/',
};

SignedInRoute.propTypes = {
  children: PropTypes.node,
  redirectPath: PropTypes.string,
  user: PropTypes.shape({
    authToken: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

export default SignedInRoute;
