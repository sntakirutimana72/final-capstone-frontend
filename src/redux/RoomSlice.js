// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

async function fetchRoomDetail(id) {
  const apiUrl = `http://localhost:3000/api/v1/rooms/${id}`;
  const response = await axios.get(apiUrl);
  const responseData = await response.json();
  return responseData;
}

export default fetchRoomDetail;
