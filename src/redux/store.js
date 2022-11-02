const BASE_URL = 'http://127.0.0.1:3000/';
const CREATE = 'room-app/room/CREATE';

export const addRoom = (room) => ({
  type: CREATE, room,
});

export const createRoom = (room) => async (dispatch) => {
  await fetch(`${BASE_URL}${'rooms'}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
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
