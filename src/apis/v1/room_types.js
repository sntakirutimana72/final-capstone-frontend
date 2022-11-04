import axios from 'axios';
import {getHeaders} from '../curl';

function RoomTypeFatch () {

axios
  .get("http://localhost:3000/api/v1/rooms_types", {
    headers: getHeaders()})
  .then((response) => {
    setRoomType(response.data.rooms_types);
  });

}