export const getHeaders = (token) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  if (token) headers.Authorization = token;
  return headers;
};

export const getCurl = (url, token) => fetch(url, {
  headers: getHeaders(token),
});

export const postCurl = (url, token, data = {}) => fetch(url, {
  method: 'POST',
  headers: getHeaders(token),
  body: JSON.stringify(data),
});

export const patchCurl = (url, token, data = {}) => fetch(url, {
  method: 'PATCH',
  headers: getHeaders(token),
  body: JSON.stringify(data),
});

export const deleteCurl = (url, token) => fetch(url, {
  method: 'DELETE',
  headers: getHeaders(token),
});
