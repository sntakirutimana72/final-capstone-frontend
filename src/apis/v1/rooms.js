import axios from 'axios';
import { getHeaders } from '../curl';
import { roomUrls, roomBaseUrl, selectRoomsUrl } from '../urls';

const getRoomsList = async () => {
  const response = await axios.get(roomBaseUrl, { headers: getHeaders() });
  return response.data;
};

export const selectRoomsList = async () => {
  const response = await axios.get(selectRoomsUrl, { headers: getHeaders() });
  return response.data;
};

export const getFacilities = async () => {
  const response = await axios.get(roomUrls.FACILITIES, {
    headers: getHeaders(),
  });
  return response.data;
};

export const createRoom = (room) => axios.post(roomBaseUrl, room, { headers: getHeaders() });

export default getRoomsList;
