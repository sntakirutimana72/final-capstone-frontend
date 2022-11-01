import { useParams } from 'react-router-dom';
import fetchRoomDetail from '../../redux/RoomSlice';

const RoomDetail = () => {
  const { id } = useParams();
  console.log(fetchRoomDetail(id));
  console.log(id);

  return (
    <div>
      Room Detail description
    </div>
  );
};

export default RoomDetail;
