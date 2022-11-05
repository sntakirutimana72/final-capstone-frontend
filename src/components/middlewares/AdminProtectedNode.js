import PropTypes from 'prop-types';
import { useSession } from '../../contexts/session';

const AdminProtectedNode = ({ children }) => {
  const { session } = useSession();
  const { user, isAuthenticated } = session;
  const roles = ['admin', 'super_admin'];

  return isAuthenticated && roles.includes(user.role) ? children : <></>;
};

AdminProtectedNode.propTypes = { children: PropTypes.node.isRequired };

export default AdminProtectedNode;
