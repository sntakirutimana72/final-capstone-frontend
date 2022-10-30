import React, { useState } from 'react';

export default function AddRoom() {
  const [state, setState] = useState({
    picture: '',
    name: '',
    number_of_beds: '',
    price: '',
    description: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="picture">Picture</label>
          <input
            type="text"
            name="Picture"
            value={state.picture}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="number_of_beds">Number of Beds</label>
          <input
            type="text"
            name="number of beds"
            value={state.number_of_beds}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            value={state.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={state.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <button type="submit">Create Room</button>
        </div>
      </form>
    </div>
  );
}
