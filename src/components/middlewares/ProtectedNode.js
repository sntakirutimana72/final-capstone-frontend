import PropTypes from 'prop-types';
import { useSession } from '../../contexts/session';

const ProtectedNode = ({ children }) => {
  const { session } = useSession();
  return session.isAuthenticated ? children : <></>;
};

ProtectedNode.propTypes = { children: PropTypes.node.isRequired };

export default ProtectedNode;
