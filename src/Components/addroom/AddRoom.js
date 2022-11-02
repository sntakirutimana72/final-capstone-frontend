import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './AddRoom.module.css';
import { createRoom } from '../../redux/store';

export default function AddRoom() {
  const [state, setState] = useState({
    picture: '',
    name: '',
    number_of_beds: '',
    price: '',
    description: '',
    user_id: '',
    room_type_id: '',
  });

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const room = {
      name: event.target.elements.name.value,
      picture: event.target.elements.picture.value,
      number_of_beds: event.target.elements.number_of_beds.value,
      price: event.target.elements.price.value,
      description: event.target.elements.description.value,
      user_id: event.target.elements.user_id.value,
      room_type_id: event.target.elements.room_type_id.value,
    };
    dispatch(createRoom(room));
  };

  return (
    <div className={classes.add_book_dev}>
      <form onSubmit={handleSubmit}>
        <div className={classes.form}>
          <label htmlFor="user_id">User Id</label>
          <input
            type="text"
            name="user_id"
            value={state.user_id}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.form}>
          <label htmlFor="room_type_id">Room Type Id</label>
          <input
            type="text"
            name="room_type_id"
            value={state.room_type_id}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.form}>
          <label htmlFor="picture">Picture</label>
          <input
            type="text"
            name="picture"
            value={state.picture}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.form}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.form}>
          <label htmlFor="number_of_beds">Number of Beds</label>
          <input
            type="text"
            name="number_of_beds"
            value={state.number_of_beds}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.form}>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            value={state.price}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.form}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={state.description}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.button}>
          <button type="submit">Create Room</button>
        </div>
      </form>
    </div>
  );
}
