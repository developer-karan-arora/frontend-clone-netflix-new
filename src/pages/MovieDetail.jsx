import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { API } from "../API";
import Tabs from "../components/Tabs";
export default function MovieDetail() {
  let { search } = useLocation();
  let [imageArray, setImageArray] = useState([]);
  let [movieData, setMovieData] = useState({
    belongs_to_collection: {
      name: ""
    },
    production_companies: [],
    production_countries: [],
    genres: []
  });
  const query = new URLSearchParams(search);
  const paramId = query.get("id");
  useEffect(() => {
    axios
      .get(
        `${API.movieDetailed}/${paramId}?api_key=3d39d6bfe362592e6aa293f01fbcf9b9`
      )
      .then((res) => {
        console.log(res.data);
        setMovieData(res.data);
      })
      .catch(console.log("Some Error in movies detail"));
  }, [paramId]);
  useEffect(() => {
    axios
      .get(
        `${API.movieDetailed}/${paramId}/images?api_key=3d39d6bfe362592e6aa293f01fbcf9b9`
      )
      .then((res) => {
        let r = res.data.posters;
        let arrayImage = [];
        for (let i = 0; i < 20; i++) {
          arrayImage.push(r[i].file_path);
        }
        setImageArray(arrayImage);
        console.log(imageArray);
      })
      .catch(console.log("Some Error in movie image"));
  }, [paramId]);
  return (
    <Container>
      <div className="movieDetails">
        <div className="moviePoster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt=""
          />
        </div>
        <div className="detailsContainer">
          <div className="mainContainer">
            <h1>{movieData.original_title}</h1>
          </div>
          <div className="extraContainer">
            <span>Status : {movieData.status}</span>
            {"  |  "}
            <span>Adult : {movieData.adult ? "Yes" : "No"}</span>
            <br />
            <span>VoteCount : {movieData.vote_count}</span>
            {"  |  "}
            <span>Rating : {movieData.vote_average}</span>
          </div>
          <p>Movie ID : {paramId}</p>
          {/*  */}
          <Tabs movieData={movieData} />
          {/*  */}
        </div>
      </div>
      <hr />
      <br />
      <div className="relatedImages">
        <h3>Related Images</h3>
        <div className="imageContainer">
          {imageArray.map((e, i) => {
            return (
              <div key={i}>
                <img src={"https://image.tmdb.org/t/p/w500" + e} alt="" />
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
  padding: 10px 20px;
  font-family: "Hanken Grotesk", Calibri, "Trebuchet MS", sans-serif;
  .movieDetails {
    display: flex;
    .moviePoster {
      margin: 0 10px;
      img {
        width: 300px;
      }
    }
    .detailsContainer {
      flex: 1;
      .mainContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          padding: 10px;
        }
      }
    }
  }
  .relatedImages {
    .imageContainer {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      img {
        width: 130px;
        margin: 6px;
      }
    }
  }
  @media screen and (max-width: 750px) {
    .movieDetails {
      display: block;
      .moviePoster {
        text-align: center;
        background-color: grey;
        margin: 0;
        padding: 0;
        height: 250px;
        overflow: hidden;
        img {
          height: 320px;
        }
      }
    }
  }
`;
