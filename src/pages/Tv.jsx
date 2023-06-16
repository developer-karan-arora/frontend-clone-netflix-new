import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { API } from "../API";
export default function Tv() {
  let [trendingTvShows, setTrendingTvShows] = useState([]);
  let tvShowPageNo = 1;
  useEffect(() => {
    axios.get(API.trendingTvShow + "1").then((res) => {
      console.log(res);
      setTrendingTvShows(res.data.results);
    });
  }, []);
  function handleMoreItem(type, pageNo, setSectionData, currentData) {
    let newItems = [];
    pageNo++;
    console.log("fetching more");
    axios.get(type + pageNo).then((res) => {
      console.log(res);
      newItems = res.data.results;
      newItems.forEach((element, index) => {
        console.log(index, element);
        setSectionData((currentData) => [...currentData, element]);
      });
    });
  }
  return (
    <Container>
      <h2>Tv Series</h2>
      <small>Scrol down...</small>
      <div className="trendingTvContainer">
        <div className="trendingTvShows">
          {trendingTvShows.map((e) => {
            return (
              <div className="trendingTvShow">
                <div className="tvImage">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="ShowMore">
        <button
          onClick={() => {
            handleMoreItem(
              API.trendingTvShow,
              tvShowPageNo,
              setTrendingTvShows,
              trendingTvShows
            );
          }}
        >
          Get More TvShows
        </button>
      </div>
    </Container>
  );
}
const Container = styled.div`
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 0 20px;
  .ShowMore {
    button {
      width: 100%;
      outline: none;
      border: none;
      padding: 5px;
      background-color: #323537d4;
      color: white;
      border-radius: 2px;
    }
  }
  .trendingMovieContainer,
  .trendingTvContainer {
    padding: 1px 0;
    display: flex;
    text-align: center;
    flex-direction: column;
    .trendingMovies,
    .trendingTvShows {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: row;
      .trendingMovie,
      .trendingTvShow {
        margin: 3px;
        border-radius: 2px;
        height: 204px;
        border: 2px solid lightgrey;
        background-color: black;
        img {
          height: 200px;
          width: 120px;
          border-radius: 2px;
          transition-duration: 0.5s;
          filter: brightness(70%);
        }
      }
      .trendingMovie:hover,
      .trendingTvShow:hover {
        filter: brightness(100%);
        scale: 120%;
        z-index: 2;
        cursor: pointer;
      }
    }
  }
`;
