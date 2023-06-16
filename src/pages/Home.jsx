import React, { useState } from "react";
import DialogBox from "../components/DialogBox";
import DialogTrailerBox from "../components/DialogBoxTrailer";
import styled from "styled-components";
import DetailedNavbar from "../components/DetailedNavbar";
// import backgroundImage from "../assets/home.jpg";
// importing icons

import { homeData } from "./homeData";
import Sidebar from "../components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Trending from "./Trending";
import Movie from "./Movie";
import MovieDetail from "./MovieDetail";
import Tv from "./Tv";
import HomeContent from "./HomeContent";
function Home() {
  let [isInfoVisible, setIsInfoVisible] = useState(false);
  let [isPlayVisible, setIsPlayVisible] = useState(false);
  let [isSidebarVisible, setSidebarVisible] = useState(false);
  let [currentMovieDetail, setCurrentMovieDetail] = useState(homeData[0]);
  console.log(homeData[0]);
  return (
    <Container>
      <DialogBox
        setIsInfoVisible={setIsInfoVisible}
        isInfoVisible={isInfoVisible}
        currentMovieDetail={currentMovieDetail}
      />
      <DialogTrailerBox
        isPlayVisible={isPlayVisible}
        setIsPlayVisible={setIsPlayVisible}
        currentMovieDetail={currentMovieDetail}
      />
      <Sidebar
        setSidebarVisible={setSidebarVisible}
        isSidebarVisible={isSidebarVisible}
      />
      <DetailedNavbar setSidebarVisible={setSidebarVisible} />
      <div style={{ paddingTop: "60px" }}></div>
      <Routes>
        <Route path="trending" element={<Trending />} />
        <Route path="movie" element={<Movie />} />
        <Route path="movie/moviedetail/*" element={<MovieDetail />} />
        <Route path="tv" element={<Tv />} />
        <Route
          exact
          path=""
          element={
            <HomeContent
              currentMovieDetail={currentMovieDetail}
              setIsPlayVisible={setIsPlayVisible}
              setIsInfoVisible={setIsInfoVisible}
              homeData={homeData}
              setCurrentMovieDetail={setCurrentMovieDetail}
            />
          }
        />
      </Routes>
    </Container>
  );
}
const Container = styled.div`
  background-color: black;
  min-height: 100vh;
  position: relative;
  .hero {
    position: relative;
    min-height: 90vh;
    max-height: 92vh;
    h1 {
      color: white;
      font-family: "Times New Roman", Times, serif;
      font-size: 50px;
      text-shadow: 4px 3px black;
    }
    .heroimg {
      filter: brightness(80%);
      height: 100vh;
      width: 100vw;
      min-width: 100px;
      height: 95vh;
      margin-left: 50%;
      transform: translateX(-50%);
    }
    .container {
      position: absolute;
      bottom: 10px;
      padding-bottom: 0px;
      .heroDetail {
        padding-left: 50px;
        padding-bottom: 10px;
      }
      /* padding-left: 50px; */
      .heroDescription {
        color: white;
        width: calc(100vw - 0px);
        height: 100px;
        overflow: hidden;
        max-width: 800px;
        padding: 5px 100px 5px 00px;
        font-family: Georgia, monospace;
        font-size: small;
        text-shadow: 1px 2px black;
      }

      button {
        background-color: white;
        color: black;
        border: none;
        font-weight: bold;
        outline: none;
        padding: 8px 0px;
        width: 100px;
        margin: 0 6px;
        border-radius: 2px;
        svg {
          margin: 0 4px;
        }
      }
      .buttons .heroInfo {
        color: black;
        background-color: gery;
      }
      .logo {
        img {
          max-height: 300px;
          height: 200px;
        }
      }
    }
    @media screen and (max-width: 800px) {
    }
  }
`;
export default Home;
