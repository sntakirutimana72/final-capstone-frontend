import { createSlice } from '@reduxjs/toolkit';


const initialState = [];
const BASE_URL = 'http://127.0.0.1:3001/'
const CREATE = 'room-app/room/CREATE';

export const addRoom = (room) => ({
  type: CREATE, room,
});

export const createRoom = (room) => async (dispatch) => {
  await fetch(`${BASE_URL}${'rooms'}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(room),
  }).then(() => dispatch(fetchRooms()));
};


export const fetchRooms = () => (dispatch) => {
  fetch(`${BASE_URL}${"rooms"}`)
    .then((response) => response.json())
    .then((data) => dispatch(addRoom(data)));
};

const roomsReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case CREATE:
     
      return action.room;
    default:
      return state;
  }
};

export default roomsReducer;

/*
export const roomInfo = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    rooms(state, action) {
      const details = action.payload.map((room) => ({
        name: room.name,
        number_of_beds: room.number_of_beds,
        picture: room.picture,
        description: room.description,
        price: room.price,
        user_id: room.user_id,
        room_type_id: room.room_type_id,
      }));
      return details;
    },

  },
});

export const pageActions = roomInfo.actions;

const addRoomEndpoint = 'http://localhost:3000/rooms';

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: name,
    number_of_beds: number_of_beds,
    picture: picture,
    price: price,
    description: description,
    user_id: user_id,
    room_type_id: room_type_id,
  }),
};

const response = await fetch(addRoomEndpoint, options);
const jsonResponse = await response.json();
// console.log(jsonResponse);
*/
