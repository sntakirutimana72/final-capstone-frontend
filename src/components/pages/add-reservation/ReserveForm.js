/* eslint-disable */
import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { selectRoomsList } from '../../../apis/v1/rooms';
import { addNewReserve } from '../../../redux/features/reservations/mine';
function ReserveForm() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [data, setData] = useState([])
  useEffect(() => {
    selectRoomsList().then(({ rooms }) => {
      setData(rooms)
    }, []);
  }, []);

  const [from_date, setFrom_date] = useState('');
  const [to_date, setTo_date] = useState('');
  const [room_id, setRoom_id] = useState(location.state);

  const onFromDateChanged = (e) => setFrom_date(e.target.value);
  const onToDateChanged = (e) => setTo_date(e.target.value);
  const onRoomChanged = (e) => setRoom_id(e.target.value);
console.log(room_id)
  const navigate = useNavigate();

  const hundleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      from_date,
      to_date,
      room_id,
    };
    dispatch(addNewReserve(obj));
    navigate('/my-reservations')
  }
  return (
    <>
      <div className="flex w-full justify-center pt-10">
        <div className="bg-white rounded-md shadow-md p-5 h-fit md:w-1/3 w-full">
          <form className="w-full " onSubmit={hundleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">

              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                  Start Date
                </label>
                <input onChange={onFromDateChanged} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date" placeholder="Enter start date" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                  End Date
                </label>
                <input onChange={onToDateChanged} className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date" placeholder="Enter end date" />

              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">

              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                  Select a room
                </label>
                <div className="relative">
                  <select onChange={onRoomChanged} className="block appearance-none w-full border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option>Please select</option>
                    {data.map((room) => (
                      <option value={room.id} key={room.id}  selected={location.state == room.id}>{room.name}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <button type="submit" className="focus:ring-2 focus:ring-offset-2 text-sm font-semibold leading-none text-white focus:outline-none bg-[#99d461] border rounded hover:bg-[#77b141] py-4 w-full">Reserve Room</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ReserveForm;
