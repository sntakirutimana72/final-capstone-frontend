import syncFetch from 'sync-fetch';
import AuthTokenStore from '../helpers/store_session';
import { authUrls } from './urls';
import { postCurl, getHeaders } from './curl';

export default class Authenticator {
  static async login(user) {
    const response = await postCurl(authUrls.LOGIN, user);
    const ctx = await response.json();
    if (response.ok) {
      AuthTokenStore.store(response.headers.get('Authorization'));
      return ctx.user;
    }
    AuthTokenStore.destroy();
    throw Error(ctx.error);
  }

  static logout() {
    try {
      return syncFetch(authUrls.LOGOUT, { method: 'DELETE', headers: getHeaders() }).ok;
    } catch {
      // error occurred while signing out
    }
  }

  static async register(user) {
    const response = await postCurl(authUrls.SIGNUP, user);
    const ctx = await response.json();
    if (response.ok) {
      AuthTokenStore.store(response.headers.get('Authorization'));
      return ctx.user;
    }
    throw Error(ctx.error);
  }

  static verifyAuthenticity() {
    try {
      const response = syncFetch(authUrls.PROFILE, { headers: getHeaders() });
      if (response.ok) return { user: response.json(), isAuthenticated: true };
      throw Error;
    } catch {
      AuthTokenStore.destroy();
      return {};
    }
  }
}
