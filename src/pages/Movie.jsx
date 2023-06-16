import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { API } from "../API";
export default function Movie() {
  let [trendingMovies, setTrendingMovies] = useState([]);
  let moviePageNo = 1;
  useEffect(() => {
    axios.get(API.trendingMovie + "1").then((res) => {
      console.log(res);
      setTrendingMovies(res.data.results);
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
      <h2>Movies</h2>
      <small>Scrol down...</small>
      <div className="trendingMovieContainer">
        <div className="trendingMovies">
          {trendingMovies.map((e) => {
            return (
              <div className="trendingMovie">
                <Link to={`/home/movie/moviedetail/?id=${e.id}`}>
                  <div className="movieImage">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <div className="orignalTitle">{e.original_title}</div>
                    <div className="name">Rating : {e.vote_average}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
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
      margin-bottom: 200px;
      margin-top: 20px;
    }
  }
  .trendingMovieContainer {
    padding: 15px 0;
    display: flex;
    text-align: center;
    flex-direction: column;

    .trendingMovies {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: row;
      .trendingMovie {
        margin: 3px;
        border-radius: 0px;
        height: 250px;
        max-width: 200px;
        width: 200px;
        background-color: #353434;
        text-align: left;
        font-size: 14px;
        .orignalTitle {
          max-height: 16px;
          font-weight: bold;
          overflow: hidden;
        }
        img {
          max-height: 200px;
          width: 100%;
          border-radius: 2px;
          transition-duration: 0.5s;
          filter: brightness(70%);
        }
        .details {
          padding: 0 20px;
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
