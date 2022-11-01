import { postCurl } from './curl';

export default class {
  static async login(email, password, token) {
    const response = await postCurl(
      'http://localhost:3001/users/sign_in', { token }, { user: { email, password } },
    );
    const ctx = await response.json();
    if (response.ok) {
      return { user: ctx.user, token: response.headers.get('Authorization') };
    }
    throw Error(ctx.error);
  }
}
