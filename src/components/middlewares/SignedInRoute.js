import { Navigate, Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSession } from '../../contexts/session';

const SignedInRoute = ({ redirectPath, children }) => {
  let { state } = useLocation();
  const { session } = useSession();

  if (session.isAuthenticated) {
    if (state === '/logout') state = null;
    return <Navigate to={redirectPath} replace />;
  }
  return children || <Outlet />;
};

SignedInRoute.defaultProps = { children: null, redirectPath: '/' };
SignedInRoute.propTypes = { children: PropTypes.node, redirectPath: PropTypes.string };

export default SignedInRoute;
