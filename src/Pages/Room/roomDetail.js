import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './RoomDetail.css';

const RoomDetail = () => {
  const [roomDetail, setRoomDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/rooms/${id}`)
      .then((response) => {
        setRoomDetail(response.data);
        console.log(response.data);
      });
  }, []);

  // const capitalize = (string) => {
  //   const string1 = string.replace(/^\s+|\s+$/gm,'');
  //   return string1.charAt(0).toUpperCase() + string1.slice(1);
  // };
  return (
    <>
      <div className="room-img">
        <img src={roomDetail.picture} alt={roomDetail.name} />
      </div>
      <div className="room-info">
        <h1 className="room-name">{roomDetail.name}</h1>
        <h1 className="room-desc">
          *
          {roomDetail.description}
        </h1>
        <ul>
          <li>
            <span className="room-info-title">Capacity: 2 Persons</span>
          </li>
          <li>
            <span>
              Price per night:
              {roomDetail.price}
            </span>
          </li>
        </ul>
        <button className="reserve-btn" type="submit">
          Reserve
        </button>
      </div>
    </>
  );
};

export default RoomDetail;
