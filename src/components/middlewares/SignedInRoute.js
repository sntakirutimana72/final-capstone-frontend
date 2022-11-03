import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSession } from '../../contexts/session';

const SignedInRoute = ({ redirectPath, children }) => {
  const { session } = useSession();
  return (
    session.isAuthenticated
      ? <Navigate to={redirectPath} replace />
      : (children || <Outlet />)
  );
};

SignedInRoute.defaultProps = { children: null, redirectPath: '/' };
SignedInRoute.propTypes = { children: PropTypes.node, redirectPath: PropTypes.string };

export default SignedInRoute;
