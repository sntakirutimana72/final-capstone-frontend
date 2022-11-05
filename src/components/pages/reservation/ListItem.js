import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  updateReservation,
  cancelReservation,
} from '../../../redux/features/reservations/mine';
import { cancelReserve, updateReserve } from '../../../apis/v1/reservations';
import { singleProps } from '../../../props/reserves';
import Spinner from '../../common/Spinner';

const ListItem = ({ item }) => {
  const [disable, setDisable] = useState(false);
  const [updates, setUpdates] = useState({});
  const [fromDate, setFromDate] = useState(item.from_date);
  const [toDate, setToDate] = useState(item.to_date);
  const dispatch = useDispatch();

  const { room } = item;

  const handleCancel = () => {
    setDisable(true);
    cancelReserve(item)
      .then(() => dispatch(cancelReservation(item.id)))
      .catch(() => setDisable(false));
  };

  const handleUpdate = () => {
    if (!Object.keys(updates).length) return;

    setDisable(true);
    updateReserve(item, { reservation: updates })
      .then((updatedItem) => dispatch(updateReservation(updatedItem)))
      .finally(() => setDisable(false));
  };

  const onFromDate = ({ target }) => {
    const { value } = target;
    setFromDate(value);
    setUpdates((state) => ({ ...state, from_date: value }));
  };

  const onEndDate = ({ target }) => {
    const { value } = target;
    setToDate(value);
    setUpdates((state) => ({ ...state, to_date: value }));
  };

  return (
    <div data-id={item.id}>
      <div className="flex flex-col gap-2 pt-3 bg-white text-sm rounded-lg shadow-1bs max-w-[270px]">
        <div className="group/item px-2">
          <img src={room.picture || ''} alt="Room Interior" className="rounded-lg" />
          <div className="flex justify-between p-1.5">
            <span>{room.name}</span>
            <span>{item.status}</span>
          </div>
          <div className="flex justify-between items-center gap-3 p-2 px-3 bg-prime-g rounded-full shadow-md">
            <input
              type="date"
              name="from_date"
              onChange={onFromDate}
              value={fromDate}
              disabled={disable}
              className="appearance-none bg-inherit border-none p-0 text-xs"
            />
            <input
              type="date"
              name="to_date"
              onChange={onEndDate}
              value={toDate}
              disabled={disable}
              className="appearance-none bg-inherit border-none p-0 text-xs"
            />
            {disable && <Spinner classes="text-green-c4 h-4 w-4" />}
          </div>
        </div>

        {item.status === 'Pending' && (
          <div className="flex items-end justify-between text-[12px] font-semibold">
            <div className="p-2 rounded-r-full bg-prime-w shadow-md">
              <button type="button" onClick={handleUpdate} disabled={disable} className="shadow-1bs rounded-full px-3 py-1 bg-indigo-500 text-white hover:bg-indigo-700">
                update
              </button>
            </div>
            <div className="p-2 rounded-l-full bg-prime-w shadow-md">
              <button type="button" onClick={handleCancel} disabled={disable} className="bg-white shadow-1bs rounded-full px-3 py-1 border border-bdr hover:bg-orange-400">
                cancel
              </button>
            </div>
          </div>
        )}

        <div className="p-2">
          <div className="rounded-[17px] bg-black p-1.5">
            <div className="grid grid-cols-3 gap-2 px-3 py-1.5 text-prime-g text-center">
              <span>Type</span>
              <span>Total Beds</span>
              <span>Price</span>
            </div>
            <div className="grid grid-cols-3 gap-2 px-3 py-1.5 bg-prime-w rounded-lg text-center font-semibold">
              <span>{room.type}</span>
              <span>{room.number_of_beds}</span>
              <span>{`$${room.price}`}</span>
            </div>
          </div>
        </div>

        <div className="p-3 rounded-b-lg shadow-1bs bg-prime-w">
          <p className="px-1 py-3">{room.description}</p>
          <div className="flex flex-wrap gap-2">
            {
              room.accomodations.map((facility) => (
                <span key={`${item.id}${facility}`} className="shadow-sm py-1 px-2 rounded-md text-xs bg-prime-g">
                  {facility}
                </span>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

ListItem.propTypes = { item: singleProps().isRequired };

export default ListItem;
