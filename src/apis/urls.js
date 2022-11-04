export const rootUrl = 'http://localhost:3000';

export const authUrls = {
  LOGIN: `${rootUrl}/users/sign_in`,
  SIGNUP: `${rootUrl}/users`,
  PROFILE: `${rootUrl}/logged_user`,
  LOGOUT: `${rootUrl}/users/sign_out`,
};

const apiUrl = `${rootUrl}/api/v1`;
export const reserveBaseUrl = `${apiUrl}/reservations`;
export const reserveUrls = {
  MINE: `${reserveBaseUrl}/mine`,
  build: (id) => `${reserveBaseUrl}/${id}`,
  // add more urls here
};

export const roomBaseUrl = `${apiUrl}/rooms`;
export const roomUrls = {
  build: (id) => `${roomBaseUrl}/${id}`,
  FACILITIES: `${apiUrl}/room-dependencies`,

  // your urls go here
};
