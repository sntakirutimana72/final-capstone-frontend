import {
  useState,
  useEffect,
  createContext,
  useCallback,
  useMemo,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import Authenticator from '../apis/authenticator';
import AuthTokenStore from '../helpers/store_session';

const sessionCtx = createContext();

export const useSessionContext = () => sessionCtx;

export const useSession = () => useContext(sessionCtx);

const SessionProvider = ({ children }) => {
  const [session, setSession] = useState({});

  const login = useCallback((user) => {
    const ctx = { user, isAuthenticated: true };
    setSession(ctx);
  }, []);

  const logout = useCallback(() => {
    AuthTokenStore.destroy();
    setSession({});
  }, []);

  const value = useMemo(() => ({ session, login, logout }), [session, login, logout]);

  useEffect(() => {
    setSession(Authenticator.verifyAuthenticity());
  }, []);

  return (
    <sessionCtx.Provider value={value}>
      {children}
    </sessionCtx.Provider>
  );
};

SessionProvider.propTypes = { children: PropTypes.node.isRequired };

export default SessionProvider;
