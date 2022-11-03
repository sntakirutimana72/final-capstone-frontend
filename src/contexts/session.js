import {
  useState,
  createContext,
  useCallback,
  useMemo,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import { storeSession, loadSession } from '../helpers/store_session';

const SessionContext = createContext();

export const useSession = () => useContext(SessionContext);

const SessionCtxProvider = ({ children }) => {
  const [session, setSession] = useState(loadSession());
  const login = useCallback(({ user, token }) => {
    const ctx = { user, token, isAuthenticated: true };
    storeSession(ctx);
    setSession(ctx);
  }, []);

  const logout = useCallback(() => {
    storeSession();
    setSession({});
  }, []);

  const value = useMemo(() => ({ session, login, logout }), [session, login, logout]);

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
};

SessionCtxProvider.propTypes = { children: PropTypes.node.isRequired };

export default SessionCtxProvider;
