import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { redirect } from "react-router-dom";
import styled from "styled-components";

export default function Welcome() {
  let navigate = useNavigate();
  useEffect(() => {
    let timeDelay = 4000;
    setTimeout(() => {
      navigate("/start");
      console.log("redirecting to getstarted Page");
    }, timeDelay);
  }, []);
  return (
    <StyledContainer className="Page center">
      <div className="logoContainer welcomeAnime">
        <img src="/netflix-icon.png" alt="" height="150px" />
      </div>
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  background-color: black;
  min-height: 100vh;
  .welcomeAnime {
    opacity: 0;
    animation-name: welcomeDisapper;
    animation-duration: 4s;
    animation-delay: 1s;
  }
  @keyframes welcomeDisapper {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
