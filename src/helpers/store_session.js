const key = 'dklsajoiweu0-59apjdlkfakoppkdsja0648pjfakl';

export default class AuthTokenStore {
  static store(token = '') { localStorage.setItem(key, token); }

  static fetch() { return localStorage.getItem(key); }

  static destroy() { localStorage.removeItem(key); }
}
