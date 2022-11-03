import { getCurl, patchCurl, deleteCurl } from '../curl';
import { reserveUrls } from '../urls';

export const getOnlyMine = async () => {
  const response = await getCurl(reserveUrls.MINE);
  if (!response.ok) throw new Error('');
  return response.json();
};

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
