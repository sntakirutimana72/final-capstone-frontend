import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  updateReservation, cancelReservation,
} from '../../../redux/features/reservations/mine';
import { singleProps } from '../../../props/reserves';
import { today } from '../../../helpers/utils';

const ListItem = ({ item }) => {
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();
  const { room } = item;

  const handleCancel = () => {
    setDisable(true);
    setTimeout(() => {
      dispatch(cancelReservation(item.id));
    }, 4000);
  };

  const handleUpdate = () => {
    setDisable(true);
    setTimeout(() => {
      dispatch(updateReservation({ ...item, to_date: today() }));
    }, 4000);
  };

  return (
    <div data-id={item.id}>
      <div className="flex flex-col gap-2 pt-3 bg-white text-sm rounded-lg shadow-1bs max-w-[270px]">
        <div className="group/item px-2">
          <img
            src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
            alt="Room Interior"
            className="rounded-lg"
          />
          <div className="flex justify-between p-1.5">
            <span>{room.name}</span>
            <span>{item.status}</span>
          </div>
          <div className="flex justify-between p-2 px-3 bg-prime-g rounded-full shadow-md text-xs">
            <span>{item.from_date}</span>
            <span>{item.to_date}</span>
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
