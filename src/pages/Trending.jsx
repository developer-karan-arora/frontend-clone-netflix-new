import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { API } from "../API";
export default function Trending() {
  let [trendingMovies, setTrendingMovies] = useState([]);
  let [trendingTvShows, setTrendingTvShows] = useState([]);
  let moviePageNo = 1;
  let tvShowPageNo = 1;
  // let [moviePageNo, setMoviePageNo] = useState(1);
  // setting up Initial Movies
  useEffect(() => {
    axios.get(API.trendingMovie + "1").then((res) => {
      console.log(res);
      setTrendingMovies(res.data.results);
    });
  }, []);
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
  // setting up more movies
  return (
    <Container>
      <h2>Movies</h2>
      <small>Scroll To see more results...</small>
      <div className="ShowMore">
        <button
          onClick={() => {
            handleMoreItem(
              API.trendingMovie,
              moviePageNo,
              setTrendingMovies,
              trendingMovies
            );
          }}
        >
          Get More Movies
        </button>
      </div>
      <div className="trendingMovieContainer">
        <div className="trendingMovies">
          {trendingMovies.map((e) => {
            return (
              <div className="trendingMovie">
                <div className="movieImage">
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
      <br />
      <h2>Tv Series</h2>
      <div className="ShowMore">
        <small>Scroll To see more results...</small>
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
    </Container>
  );
}
const Container = styled.div`
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
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
    padding: 15px 0;
    display: flex;
    text-align: center;
    overflow-x: scroll;
    flex-direction: column;
    ::-webkit-scrollbar {
      height: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: #888;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
    .trendingMovies,
    .trendingTvShows {
      display: flex;
      justify-content: center;
      height: 430px;
      flex-wrap: wrap;
      flex-direction: column;
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
