import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './RoomDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

const RoomDetail = () => {
  const [roomDetail, setRoomDetail] = useState([]);
  // const [message, setMessage] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/rooms/${id}`)
      .then((response) => {
        setRoomDetail(response.data);
      });
  }, []);

  const reserve = () => {
    useEffect(() => {
      axios.post(`http://localhost:3000/api/v1/rooms/${id}/reserve`, {
        body: JSON.stringify({
          room_id: roomDetail.id,
          user_id: roomDetail.user_id,
        }),
        // .then((response) => {
        //   setMessage(response.data);
        // }),
      });
    }, []);
  };

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
        <ul className="left-panel">
          <li>
            <span className="room-info-title">
              Capacity
            </span>
            <span>
              {roomDetail.number_of_beds}
              {' '}
              Persons
            </span>
          </li>
          <li>
            <span>
              Price per night
            </span>
            <span>
              $
              {roomDetail.price}
            </span>
          </li>
          <li>
            <span>
              Reservation fee
            </span>
            <span>
              $
              {(roomDetail.price / 3).toFixed(2)}
            </span>
          </li>
        </ul>
        <button className="reserve-btn" type="submit" onClick={reserve}>
          <FontAwesomeIcon className="font-calendar" icon={faCalendarCheck} />
          <span>
            Reserve
          </span>
          <FontAwesomeIcon className="font-arrow" icon={faCircleChevronRight} />
        </button>
      </div>
    </>
  );
};

export default RoomDetail;
