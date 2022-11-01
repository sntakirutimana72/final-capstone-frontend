import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getSession } from '../../contexts/session';

const UserRequiredRoute = ({ redirectPath, children }) => {
  const { session } = getSession();
  return (
    !session.isAuthenticated
      ? <Navigate to={redirectPath} replace />
      : (children || <Outlet />)
  );
};

UserRequiredRoute.defaultProps = { children: null, redirectPath: '/get-started' };
UserRequiredRoute.propTypes = { children: PropTypes.node, redirectPath: PropTypes.string };

export default UserRequiredRoute;
