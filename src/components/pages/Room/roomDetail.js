import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './RoomDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

const RoomDetail = () => {
  const rooms = useSelector((state) => state.rooms.data);
  const { id } = useParams();

  const detail = rooms.find((room) => room.id === Number(id));

  const nav = useNavigate();
  const changeRoute = () => nav('/reserve', { state: id });

  return (
    <>
      <div className="main-container">
        <div className="room-img">
          <img src={detail.picture} alt={detail.name} />
        </div>
        <div className="room-info">
          <h1 className="room-name">{detail.name}</h1>
          <h1 className="room-desc">
            *
            {detail.description}
          </h1>
          <ul className="right-panel">
            <li>
              <span className="room-info-title">
                Capacity
              </span>
              <span>
                {detail.number_of_beds}
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
                {detail.price}
              </span>
            </li>
            <li>
              <span>
                Reservation fee
              </span>
              <span>
                $
                {(detail.price / 3).toFixed(2)}
              </span>
            </li>
          </ul>
          <button className="reserve-btn" style={{ backgroundColor: '#92b811' }} type="submit" onClick={changeRoute}>
            <FontAwesomeIcon className="font-calendar" icon={faCalendarCheck} />
            <span>
              Reserve
            </span>
            <FontAwesomeIcon className="font-arrow" icon={faCircleChevronRight} />
          </button>
        </div>
      </div>
    </>
  );
};

export default RoomDetail;
