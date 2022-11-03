import {
  getCurl, patchCurl, deleteCurl, postCurl,
} from '../curl';
import { reserveUrls, reserveBaseUrl } from '../urls';

export const getOnlyMine = async () => {
  const response = await getCurl(reserveUrls.MINE);
  if (!response.ok) throw new Error('');
  return response.json();
};

export const createReservation = (data) => new Promise((resolve, reject) => {
  postCurl(reserveBaseUrl, data)
    .then((response) => {
      if (!response.ok) reject();
      return response.json();
    })
    .then(({ reservation }) => resolve(reservation))
    .catch(() => reject());
});

export const updateReserve = ({ id }, dates) => new Promise((resolve, reject) => {
  patchCurl(reserveUrls.build(id), dates)
    .then((response) => {
      if (!response.ok) reject();
      return response.json();
    })
    .then(({ reservation }) => resolve(reservation))
    .catch(() => reject());
});

export const cancelReserve = ({ id }) => new Promise((resolve, reject) => {
  deleteCurl(reserveUrls.build(id))
    .then((response) => {
      if (response.ok) resolve();
      reject();
    }).catch(() => reject());
});
