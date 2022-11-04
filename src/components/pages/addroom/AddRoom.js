import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFacilities, createRoom } from '../../../apis/v1/rooms';
import { isEmpty } from '../../../helpers/utils';
import Spinner from '../../common/Spinner';
import classes from './AddRoom.module.css';

export default function AddRoom() {
  const [disable, setDisable] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [picture, setPicture] = useState('');
  const [beds, setBeds] = useState('');
  const [description, setDesc] = useState('');
  const [roomType, setType] = useState('');
  const [roomTypes, setTypes] = useState([]);
  const [roomAccoms, setAccoms] = useState([]);
  const [checkedState, setCheckedState] = useState(
    new Array(roomAccoms).fill(false),
  );
  const navigate = useNavigate();
  const handleNameChange = useCallback(
    ({ target }) => setName(target.value),
    [],
  );
  const handlePriceChange = useCallback(
    ({ target }) => setPrice(target.value),
    [],
  );
  const handlePictureChange = useCallback(
    ({ target }) => setPicture(target.value),
    [],
  );
  const handleBedsChange = useCallback(
    ({ target }) => setBeds(target.value),
    [],
  );
  const handleDescChange = useCallback(
    ({ target }) => setDesc(target.value),
    [],
  );
  const handleTypeChange = useCallback(
    ({ target }) => setType(target.value),
    [],
  );
  const handleCheckedState = (position) => {
    const updatedCheckedState = checkedState.map(
      (checked, index) => (index === position ? !checked : checked),
    );
    setCheckedState(updatedCheckedState);
  };
  useEffect(() => {
    getFacilities().then(({ types, accoms }) => {
      setTypes(types);
      setCheckedState(new Array(accoms.length).fill(false));
      setAccoms(accoms);
    }, []);
  }, []);
  const onSubmit = (event) => {
    event.preventDefault();
    setDisable(true);
    const accomodations = [];
    checkedState.forEach((state, index) => {
      if (state) accomodations.push(roomAccoms[index].id);
    });
    if (isEmpty(accomodations)) return setDisable(false);
    const room = {
      room: {
        name,
        number_of_beds: beds,
        price,
        description,
        picture,
        room_type_id: roomType,
        accomodations,
      },
    };
    createRoom(room)
      .then(() => navigate('/rooms'))
      .catch(() => setDisable(false));
  };
  return (
    <div className={classes.add_book_dev}>
      <form onSubmit={onSubmit}>
        <div className={classes.form}>
          <label htmlFor="room_type_id">Room Type</label>
          <select
            className={classes.select}
            value={roomType}
            onChange={handleTypeChange}
          >
            {roomTypes.map(({ id, name }) => (
              <option key={`type-${id}`} value={id}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.form}>
          <label htmlFor="picture">Picture</label>
          <input
            className={classes.select}
            type="text"
            name="picture"
            required
            disabled={disable}
            value={picture}
            onChange={handlePictureChange}
          />
        </div>
        <div className={classes.form}>
          <label htmlFor="name">Name</label>
          <input
            className={classes.select}
            type="text"
            name="name"
            required
            disabled={disable}
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className={classes.form}>
          <label htmlFor="number_of_beds">Number of Beds</label>
          <input
            className={classes.select}
            type="number"
            min={1}
            name="number_of_beds"
            required
            disabled={disable}
            value={beds}
            onChange={handleBedsChange}
          />
        </div>
        <div className={classes.form}>
          <label htmlFor="price">Price</label>
          <input
            className={classes.select}
            type="text"
            name="price"
            required
            disabled={disable}
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div className={classes.form}>
          <label htmlFor="description">Description</label>
          <input
            className={classes.select}
            type="text"
            name="description"
            disabled={disable}
            value={description}
            onChange={handleDescChange}
          />
        </div>
        <div>
          <div className="flex flex-wrap mt-5 gap-4 p-3 rounded-md shadow-1bs">
            {roomAccoms.map(({ name: alias }, index) => (
              <div key={`accom-${index}`}>
                <div className="flex gap-3 items-center p-2 rounded-sm shadow-sm">
                  <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    name={alias}
                    value={alias}
                    disabled={disable}
                    checked={checkedState[index]}
                    onChange={() => handleCheckedState(index)}
                  />
                  <label htmlFor={`checkbox-${index}`}>{alias}</label>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.button}>
          <button type="submit">
            {disable ? (
              <>
                Saving...
                <Spinner />
              </>
            ) : (
              <>Create Room</>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
