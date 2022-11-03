import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOnlyMine } from '../../../redux/features/reservations/mine';
import { getMyReserves } from '../../../redux/effects/reservations/mine';
import Header from './Header';
import Filters from './filters';
import ListView from './ListView';
import Spinner from '../../common/Spinner';

const MyReserves = () => {
  const {
    status, analytics, visibilityFilter: filter, reservations,
  } = useSelector(getMyReserves);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') dispatch(fetchOnlyMine());
  }, [status, dispatch]);

  return (
    <>
      {
        status !== 'off' ? (
          <div className="flex flex-col items-center justify-center min-h-screen">
            <Spinner classes="text-gray-300 h-9 w-9" />
          </div>
        ) : (
          <div className="flex flex-col items-center py-5 p-6 gap-4 min-h-screen">
            <Header />
            <Filters visibilityFilter={filter} analytics={analytics} />
            <ListView items={reservations} />
          </div>
        )
      }
    </>
  );
};

export default MyReserves;
