import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSession } from '../../../contexts/session';
import Authenticator from '../../../apis/authenticator';

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useSession();

  useEffect(() => {
    if (Authenticator.logout()) logout();
    navigate('/');
  }, []);

  return <></>;
};

export default Logout;
