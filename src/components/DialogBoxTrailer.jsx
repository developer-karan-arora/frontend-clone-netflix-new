import styled from "styled-components";
import { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function DialogTrailerBox(props) {
  // props.isPlayVisible
  // props.setIsPlayVisible
  console.log(props.currentMovieDetail.trailer);
  const boxVisibility = useRef(props);
  useEffect(() => {
    console.log("Checking Consdition ", props.isPlayVisible);
    if (props.isPlayVisible) {
      boxVisibility.current.style.display = "flex";
    } else {
      boxVisibility.current.style.display = "none";
    }
  }, [props.isPlayVisible]);
  return (
    <Container ref={boxVisibility}>
      <div className="dialog">
        <div className="close">
          <button
            onClick={() => {
              props.setIsPlayVisible(false);
            }}
          >
            <AiOutlineClose />
          </button>
        </div>
        <div>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed${props.currentMovieDetail.trailer}`}
            title="YouTube video player"
            frameBorder="0"
            allow="acceleroMeter; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          {/* <iframe
            width="100%"
            height="100%"
            src={`${props.currentMovieDetail.trailer}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; gyroscope;"
          ></iframe> */}
        </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  .dialog {
    min-height: 80%;
    width: 70vw;
    min-width: 350px;
    background-color: black;
    .close {
      text-align: right;
      button {
        background-color: black;
        color: white;
        padding: 8px 8px 5px 8px;
        border: 1px solid #d3d3d370;
        border-radius: 50%;
        margin: 20px 20px 0 0;
      }
    }
    iframe {
      height: 450px;
      /* width: 850px; */
    }
  }
`;
