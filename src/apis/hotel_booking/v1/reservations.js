import { getCurl, patchCurl, deleteCurl } from './curl';
import { getAuthToken } from '../../../helpers/store_session';

export const baseUrl = 'http://localhost:3001/reservations';

export const getOnlyMine = async () => {
  const response = await getCurl(`${baseUrl}/mine`, getAuthToken());
  if (!response.ok) throw new Error('');
  return response.json();
};

export const updateReserve = ({ id }, dates) => new Promise((resolve, reject) => {
  patchCurl(`${baseUrl}/${id}`, getAuthToken(), dates)
    .then((response) => {
      if (!response.ok) reject();
      return response.json();
    })
    .then(({ reservation }) => resolve(reservation))
    .catch(() => reject());
});

export const cancelReserve = ({ id }) => new Promise((resolve, reject) => {
  deleteCurl(`${baseUrl}/${id}`, getAuthToken())
    .then((response) => {
      if (response.ok) resolve();
      reject();
    }).catch(() => reject());
});
