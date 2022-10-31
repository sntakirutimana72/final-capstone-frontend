import axios from 'axios';

const GET_DATA = 'ROOM_INFO';
const initialState = [];

export const fetchData = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3000/api/v1/rooms');
  return dispatch({ type: GET_DATA, payload: response.data.rooms });
};

const roomsReducer = (state = initialState, action) => {
  switch (action.payload) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default roomsReducer;
