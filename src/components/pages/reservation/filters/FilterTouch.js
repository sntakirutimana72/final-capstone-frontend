import { useDispatch } from 'react-redux';
import { filterTouchProps } from '../../../../props/reserves';
import { setVisibilityFilter } from '../../../../redux/features/reservations/mine';

const FilterTouch = ({ filter, enabled, children }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setVisibilityFilter(filter));
  };
  return (
    <>
      {
        enabled ? (
          <button type="button" onClick={handleClick} className="text-[13px] py-2 px-2 md:px-6 border-b-2 border-indigo-600 font-bold">
            {children}
          </button>
        ) : (
          <button type="button" onClick={handleClick} className="text-[13px] py-2 px-2 md:px-6 text-gray-400">
            {children}
          </button>
        )
      }
    </>
  );
};

FilterTouch.propTypes = filterTouchProps;

export default FilterTouch;
