import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserRequiredRoute = ({ user, children, redirectPath }) => {
  if (!user) return <Navigate to={redirectPath} replace />;

  return children || <Outlet />;
};

UserRequiredRoute.defaultProps = {
  user: null,
  children: null,
  redirectPath: '/get-started',
};

UserRequiredRoute.propTypes = {
  children: PropTypes.node,
  redirectPath: PropTypes.string,
  user: PropTypes.shape({
    authToken: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

export default UserRequiredRoute;
