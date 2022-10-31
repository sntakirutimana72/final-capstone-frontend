// import { useEffect } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'nuka-carousel/lib/carousel';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { fetchData } from '../../Redux/roomsReducer';
import Room from './Room';
import './Carousel.css';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  // const rooms = useSelector((state) => state.rooms);
  // const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/rooms/').then((response) => {
      setRooms(response.data.rooms);
    });
  }, []);

  // useEffect(() => {
  //   dispatch(fetchData);
  // });

  const theme = useTheme();
  const mediumUp = useMediaQuery(theme.breakpoints.up('md'));
  const largeUp = useMediaQuery(theme.breakpoints.up('lg'));

  let slideToShow = 1;
  if (mediumUp) {
    slideToShow = 2;
  }
  if (largeUp) {
    slideToShow = 3;
  }

  return (
    <>
      <h2 className="text-[30px]  text-center mt-10 uppercase">
        <strong>Our Rooms</strong>
      </h2>
      <p className="text-[18px] text-center mb-5 text-zinc-500">
        Please select a room from below list to reserve
      </p>
      <div>
        <Carousel
          renderCenterLeftControls={({ previousSlide }) => (
            <button type="button" onClick={previousSlide}>
              <ChevronLeftIcon />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button type="button" onClick={nextSlide}>
              <ChevronRightIcon />
            </button>
          )}
          wrapAround
          slidesToShow={slideToShow}
          renderBottomCenterControls={false}
        >
          {rooms
            .slice(0)
            .reverse()
            .map((room) => (
              <Room
                key={room.id}
                picture={room.picture}
                name={room.name}
                description={room.description}
              />
            ))}
        </Carousel>
      </div>
    </>
  );
};

export default Rooms;
