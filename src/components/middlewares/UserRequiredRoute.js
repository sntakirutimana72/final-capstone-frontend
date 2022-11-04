import { Navigate, Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSession } from '../../contexts/session';

const UserRequiredRoute = ({ redirectPath, children }) => {
  const { pathname } = useLocation();
  const { session } = useSession();

  if (!session.isAuthenticated) {
    return <Navigate to={redirectPath} state={pathname} replace />;
  }
  return children || <Outlet />;
};

UserRequiredRoute.defaultProps = { children: null, redirectPath: '/' };
UserRequiredRoute.propTypes = { children: PropTypes.node, redirectPath: PropTypes.string };

export default UserRequiredRoute;
