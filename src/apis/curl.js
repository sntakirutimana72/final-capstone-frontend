import AuthTokenStore from '../helpers/store_session';

export const getHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: AuthTokenStore.fetch(),
});

export const getCurl = (url) => fetch(url, { headers: getHeaders() });

export const postCurl = (url, data = {}) => fetch(url, {
  method: 'POST', headers: getHeaders(), body: JSON.stringify(data),
});

export const patchCurl = (url, data = {}) => fetch(url, {
  method: 'PATCH', headers: getHeaders(), body: JSON.stringify(data),
});

export const deleteCurl = (url) => fetch(url, { method: 'DELETE', headers: getHeaders() });
