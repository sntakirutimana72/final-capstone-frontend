import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSession } from '../../contexts/session';

const UserRequiredRoute = ({ redirectPath, children }) => {
  const { session } = useSession();
  return (
    !session.isAuthenticated
      ? <Navigate to={redirectPath} replace />
      : (children || <Outlet />)
  );
};

UserRequiredRoute.defaultProps = { children: null, redirectPath: '/login' };
UserRequiredRoute.propTypes = { children: PropTypes.node, redirectPath: PropTypes.string };

export default UserRequiredRoute;
