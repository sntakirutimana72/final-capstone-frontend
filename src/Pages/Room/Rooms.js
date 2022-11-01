import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "nuka-carousel/lib/carousel";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { getRooms } from "../../Redux/roomsSlice";
import Room from "./Room";
import "./Carousel.css";

function Rooms() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

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
    content = data
      .slice(0)
      .reverse()
      .map((item) => <Room room={item} key={item.id} />);
  }

  if (error != null) {
    content = <span>{error}</span>;
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
          {content}
        </Carousel>
      </div>
    </>
  );
}

export default Rooms;
