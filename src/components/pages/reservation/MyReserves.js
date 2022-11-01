import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOnlyMine } from '../../../redux/features/reservations/mine';
import { getMyReserves } from '../../../redux/effects/reservations/mine';
import Header from './Header';
import Filters from './filters';
import ListView from './ListView';

const MyReserves = () => {
  const {
    status, analytics, visibilityFilter: filter, reservations,
  } = useSelector(getMyReserves);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') dispatch(fetchOnlyMine());
  }, []);

  return (
    <div className="flex flex-col py-5 p-6 gap-4 min-h-screen">
      <Header />
      <Filters visibilityFilter={filter} analytics={analytics} />
      <ListView items={reservations} />
    </div>
  );
};

export default MyReserves;
