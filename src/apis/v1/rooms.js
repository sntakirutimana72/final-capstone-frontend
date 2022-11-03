import axios from 'axios';
import { getHeaders } from '../curl';

export const getRoomsList = async () => {
  const response = await axios.get('http://127.0.0.1:3000/api/v1/rooms', { headers: getHeaders() });
  return response.data;
};
