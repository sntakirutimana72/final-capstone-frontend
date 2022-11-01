import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Carousel from "nuka-carousel/lib/carousel";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { getRooms } from "../../Redux/roomsSlice";
import Room from "./Room";
import "./Carousel.css";

const Rooms = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  // const [rooms, setRooms] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/api/v1/rooms/').then((response) => {
  //     setRooms(response.data.rooms);
  //   });
  // }, []);

  const theme = useTheme();
  const mediumUp = useMediaQuery(theme.breakpoints.up("md"));
  const largeUp = useMediaQuery(theme.breakpoints.up("lg"));

  let slideToShow = 1;
  if (mediumUp) {
    slideToShow = 2;
  }
  if (largeUp) {
    slideToShow = 3;
  }

  let content;

  if (loading === "pending") {
    content = <span>Loading</span>;
  }

  if (loading === "idle") {
    content = data.map((item) => {
      return <Room room={item} />;
    });
  }

  if (error != null) {
    content = <span>{error}</span>;
  }

  return <div>{content}</div>;

  // return (
  //   <>
  //     <h2 className="text-[30px]  text-center mt-10 uppercase">
  //       <strong>Our Rooms</strong>
  //     </h2>
  //     <p className="text-[18px] text-center mb-5 text-zinc-500">
  //       Please select a room from below list to reserve
  //     </p>
  //     <div>
  //       <Carousel
  //         renderCenterLeftControls={({ previousSlide }) => (
  //           <button type="button" onClick={previousSlide}>
  //             <ChevronLeftIcon />
  //           </button>
  //         )}
  //         renderCenterRightControls={({ nextSlide }) => (
  //           <button type="button" onClick={nextSlide}>
  //             <ChevronRightIcon />
  //           </button>
  //         )}
  //         wrapAround
  //         slidesToShow={slideToShow}
  //         renderBottomCenterControls={false}
  //       >
  //         {rooms
  //           .slice(0)
  //           .reverse()
  //           .map((room) => (
  //             <Room
  //               key={room.id}
  //               picture={room.picture}
  //               name={room.name}
  //               description={room.description}
  //             />
  //           ))}
  //       </Carousel>
  //     </div>
  //   </>
  // );
};

export default Rooms;
