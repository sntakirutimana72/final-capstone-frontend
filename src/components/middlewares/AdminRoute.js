import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSession } from '../../contexts/session';

const AdminRoute = ({ redirectPath, children }) => {
  const { session } = useSession();
  const { user, isAuthenticated } = session;
  const roles = ['admin', 'super_admin'];

  let toUrl = '/login';

  if (isAuthenticated) {
    if (roles.includes(user.role)) return children || <Outlet />;
    toUrl = redirectPath;
  }
  return <Navigate to={toUrl} replace />;
};

AdminRoute.defaultProps = { children: null, redirectPath: '/' };
AdminRoute.propTypes = { children: PropTypes.node, redirectPath: PropTypes.string };

export default AdminRoute;
