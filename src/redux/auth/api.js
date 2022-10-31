import axios from 'axios';

export const logout = () => {
  localStorage.removeItem('user');
  if (localStorage.getItem('user') == null) {
    return true;
  }
  return false;
};
export const login = async (email, password) => {
  const request = await axios.post('http://localhost:3000/users/sign_in', {
    user: {
      email,
      password,
    },
  });
  const token = request.headers.get('authorization');
  localStorage.setItem('user', JSON.stringify(token));
  return request.data;
};

export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return {
      Authorization: user.token,
      'Content-Type': 'application/json',
    };
  }
  return {};
};

export const request = axios.create({ headers: authHeader() });
