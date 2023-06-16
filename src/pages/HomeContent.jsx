import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Slider from "../components/Slider";
export default function HomeContent(props) {
  return (
    <Container>
      <div className="hero">
        <img
          src={`https://image.tmdb.org/t/p/w500${props.currentMovieDetail.poster_path}`}
          alt="background"
          className="background-image heroimg"
        />
        {/* </Link> */}
        {/*  */}
        <div className="container">
          <div className="heroDetail">
            <div className="logo">
              <h1>{props.currentMovieDetail.title}</h1>
            </div>
            <div className="heroDescription">
              {props.currentMovieDetail.overview}
            </div>
            <div className="buttons flex">
              <button
                onClick={() => {
                  props.setIsPlayVisible(true);
                }}
                className="heroPlay"
              >
                <FaPlay />
                Play
              </button>
              <button
                className="heroInfo"
                onClick={() => {
                  props.setIsInfoVisible(true);
                  // console.log(isInfoVisible);
                }}
              >
                <AiOutlineInfoCircle />
                More Info
              </button>
            </div>
          </div>
          <Slider
            homeData={props.homeData}
            setCurrentMovieDetail={props.setCurrentMovieDetail}
          />
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div``;
