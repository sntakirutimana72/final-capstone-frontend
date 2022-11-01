import {
  getCurl,
  patchCurl,
  deleteCurl,
  postCurl,
} from './curl';

export const baseUrl = 'http://localhost:3001/api/v1/reservations';

export const getOnlyMine = () => getCurl(`${baseUrl}/mine`, '<AUTH_TOKEN>');

export const createReservation = (data) => postCurl(
  `${baseUrl}`, '<AUTH_TOKEN>', data,
).then(async (response) => {
  const res = await response.json();
  if (!response.ok) throw new Error(res.error);
  return res.data;
}).catch(
  () => { },
);
export const updateReservation = (id, dates) => patchCurl(
  `${baseUrl}/${id}`, '<AUTH_TOKEN>', dates,
).then(async (response) => {
  const res = await response.json();
  if (!response.ok) throw new Error(res.error);
  return res.reservation;
}).catch(
  () => { },
);

export const cancelReservation = (id) => deleteCurl(`${baseUrl}/${id}`, '<AUTH_TOKEN>')
  .then((response) => response.status === 200)
  .catch(() => { });
