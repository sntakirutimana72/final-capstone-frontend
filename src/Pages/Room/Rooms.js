import { useEffect, useState } from 'react';
import axios from 'axios';
import Room from './Room';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/rooms').then((response) => {
      //   console.log(response);
      setRooms(response.data.rooms);
    });
  }, []);

  return (
    <>
      {rooms.map((room) => (
        <Room
          key={room.id}
          picture={room.picture}
          name={room.name}
          price={room.price}
        />
      ))}
    </>
  );
};

export default Rooms;
