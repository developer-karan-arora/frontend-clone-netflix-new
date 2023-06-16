import styled from "styled-components";
import { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
export default function DialogBox(props) {
  const boxVisibility = useRef(props);
  useEffect(() => {
    console.log("Checking Consdition ", props.isInfoVisible);
    if (props.isInfoVisible) {
      boxVisibility.current.style.display = "flex";
    } else {
      boxVisibility.current.style.display = "none";
    }
  }, [props.isInfoVisible]);
  return (
    <Container ref={boxVisibility}>
      <div className="dialog">
        <div className="close">
          <button
            onClick={() => {
              props.setIsInfoVisible(false);
            }}
          >
            <AiOutlineClose />
          </button>
        </div>
        <p>
          <b>Movie Name :-</b> {props.currentMovieDetail.title}
        </p>
        <p>
          <b>Movie Language :-</b> {props.currentMovieDetail.original_language}
        </p>
        <p>
          <b>Movie ID :-</b> {props.currentMovieDetail.id}
        </p>
        <p>
          <b>Movie trailer :-</b> {props.currentMovieDetail.trailer}
        </p>
        <p>
          <b>Movie vote_count :-</b> {props.currentMovieDetail.vote_count}
        </p>
        <p>
          <b>Movie vote_average :-</b> {props.currentMovieDetail.vote_average}
        </p>
        <p>
          <b>Movie release_date :-</b> {props.currentMovieDetail.release_date}
        </p>
        <p>
          <b>Movie popularity :-</b> {props.currentMovieDetail.popularity}
        </p>
        <p>
          <b>Movie Desc :-</b> {props.currentMovieDetail.overview}
        </p>
      </div>
    </Container>
  );
}
const Container = styled.div`
  position: absolute;
  background-color: #0000006d;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 2;
  display: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: lightgray;
  border-radius: 2px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  .close {
    text-align: right;
    button {
      background-color: black;
      color: white;
      padding: 8px 8px 5px 8px;
      border: 1px solid #d3d3d370;
      border-radius: 50%;
    }
  }
  .dialog {
    min-height: 80%;
    min-width: 350px;
    width: 70%;
    padding: 10px 10px 10px 10px;
    background-color: black;
    box-shadow: 1px 2px 7px lightgray;
    overflow-y: scroll;
  }
  p {
    margin: 10px;
    border-bottom: 1px solid grey;
  }
`;
