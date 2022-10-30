/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Room = ({
  id, name, price, description,
}) => (
  <NavLink key={id} to={`/room/${id}`}>
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  </NavLink>
);

export default Room;
