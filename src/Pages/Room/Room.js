/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Room = ({
  id,
  name,
  picture,
  price,
}) => (
  <NavLink key={id} to={`/room/${id}`} className="link">
    <div className="room-card">
      <div className="room-image-container">
        <img src={picture} alt={name} className="room-image" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3>{name}</h3>
        <h5 className="room-price">
          $
          {' '}
          {price}
        </h5>
      </div>
    </div>
  </NavLink>
);

export default Room;
