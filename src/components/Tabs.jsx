import { useRef, useState } from "react";
import styled from "styled-components";
export default function Tabs(props) {
  let detailRef = useRef();
  let movieData = props.movieData;
  let [currentElement, setCurrentElement] = useState("tabA");
  function handleTabChamge(e) {
    let currentTab = currentElement;
    let targetTab = e.target.className;
    detailRef.current.querySelector(`.${currentTab}`).style.border = "0px";
    detailRef.current.querySelector(`.${targetTab}`).style.borderBottom =
      "6px solid #484848d4";
    detailRef.current.querySelector(`.${currentTab}Data`).style.display =
      "none";
    detailRef.current.querySelector(`.${targetTab}Data`).style.display =
      "block";
    setCurrentElement(targetTab);
  }
  // useEffect()
  return (
    <Components>
      <div className="tabContainer" ref={detailRef}>
        <div className="tabMenu">
          <span className="tabA" onClick={handleTabChamge}>
            OVERVIEW
          </span>
          <span className="tabB" onClick={handleTabChamge}>
            DATA
          </span>
          <span className="tabC" onClick={handleTabChamge}>
            EXTRA
          </span>
          {/* <span className="tabD" onClick={handleTabChamge}>
            Tab4
          </span> */}
        </div>
        <div className="tabDescription">
          <div className="tabAData">
            <div className="overview">
              <p>
                <b>Website : </b>
                <a href={movieData.homepage}>{movieData.homepage}</a>
              </p>
              <p>
                <b>Tagline : </b>
                {movieData.tagline}
              </p>
              <p>
                <b>Description : </b>
                {movieData.overview}
              </p>
              <br />
              <p>
                <b>Budget : </b>
                {movieData.budget - 100000}(Estimated)
              </p>
              <p>
                <b>Revenue : </b>
                {movieData.revenue - 100000}(Estimated)
              </p>
              <br />
              {}
              <p></p>
            </div>
          </div>
          <div className="tabBData">
            <p>
              <b> Adult : </b>
              {movieData.adult ? "Yes" : "No"}
            </p>
            <p>
              <b>Runtime : </b>
              {movieData.runtime}
            </p>
            <p>
              <b>Rating : </b>
              {movieData.vote_average}
            </p>
            <p>
              <b>VoteCount : </b>
              {movieData.vote_count}
            </p>
            <hr />
            <p>
              <b>Status : </b>
              {movieData.status}
            </p>
            <p>
              <b>Relese Date : </b>
              {movieData.release_date}
            </p>
            <p>
              <b>Popularity : </b>
              {movieData.popularity}
            </p>
            <hr />
            <p>
              <b>TMDB Id : </b>
              {movieData.id}
            </p>
            <p>
              <b>IMDB Id : </b>
              {movieData.imdb_id}
            </p>
            <hr />
            <p>
              <b>Budget : </b>
              {movieData.budget}(Estimated)
            </p>
            <p>
              <b>Revenue : </b>
              {movieData.revenue}(Estimated)
            </p>
          </div>
          <div className="tabCData">
            {/* <p>
              <b>Belong To : </b>
              {if(movieData.belongs_to_collection.name){ movieData.belongs_to_collection.name}}
            </p> */}
            <hr />
            <p>
              <b>Categeories</b>
            </p>
            {movieData.genres.map((e, index) => {
              return <p key={index}>&emsp;&emsp; - &ensp;{e.name}</p>;
            })}
            <hr />
            <p>
              <b>production_companies</b>
            </p>
            {movieData.production_companies.map((e, index) => {
              return <p key={index}>&emsp;&emsp; - &ensp;{e.name}</p>;
            })}
            <hr />
            <p>
              <b>production_countries</b>
            </p>
            {movieData.production_countries.map((e, index) => {
              return <p key={index}>&emsp;&emsp; - &ensp;{e.name}</p>;
            })}
          </div>
          <div className="tabDData">This is tab 4 description</div>
        </div>
      </div>
    </Components>
  );
}
let Components = styled.div`
  .overview a:hover {
    color: cyan;
  }
  p:hover {
    color: lightgrey;
  }
  .tabContainer {
    padding: 20px 0;

    .tabMenu {
      padding: 10px 0;
      span {
        padding: 5px 0;
        margin: 0 10px;
      }
    }
    .tabDescription {
      height: 350px;
      overflow-y: scroll;
      background-color: #484848d4;
    }
    .tabDescription div {
      padding: 4px 5px;
      display: none;
    }
    .tabMenu span:nth-child(1) {
      border-bottom: 6px solid #484848d4;
      /* border-color */
    }
    .tabDescription div:nth-child(1) {
      display: block;
    }
  }
`;
