import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Hero from "../components/Home/Hero";
function GetStarted() {
  return (
    <Container>
      <section className="page-section home-bg">
        <div className="bg-effect-mid">
          <div className="bg-effect-top"></div>
          <Header></Header>
          <Hero></Hero>
          <div className="bg-effect-bottom"></div>
          {/* <div className="bg-effect-top"></div> */}
        </div>
      </section>
      <section className="page-sub-section home-tut">
        <div className="right">
          <div className="home-tut-vdo"></div>
          <div className="home-tut-frame"></div>
        </div>
        <div className="left">
          <h2>Enjoy on your TV</h2>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
      </section>
      {/*  */}
      <section className="page-sub-section home-player">
        <div className="right">
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="left">
          <div className="home-player-vdo"></div>
          <div className="home-player-frame"></div>
        </div>
      </section>
      {/*  */}
      <section className="page-sub-section home-child">
        <div className="right">
          <img src="/images/home-choldren.png" alt="" />
        </div>
        <div className="left">
          <h2>Create profiles for kids</h2>
          <p>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </section>
    </Container>
  );
}
const Container = styled.div`
  .page-section {
    height: 100vh;
  }
  .page-sub-section {
    background-color: black;
    border-bottom: 6px solid grey;
    min-height: 85vh;
  }
  .home-bg {
    background-image: url("/backgrounds/netflix-home-bg.jpg");
    max-height: 100vh;
  }
  .logo {
    margin: -10px 0;
  }
  .bg-effect-top {
    top: 0;
    width: 100%;
    height: 200px;
    position: absolute;
    background-image: linear-gradient(to bottom, #000000, transparent);
  }
  .bg-effect-bottom {
    bottom: 0vh;
    width: 100%;
    height: 100px;
    position: absolute;
    background-image: linear-gradient(to top, #000000, transparent);
  }
  @media screen and (max-width: 600px) {
    .home-hero {
      padding-top: 75px !important;
    }
    .bg-effect-bottom {
      /* bottom: 10vh; */
      height: 100px;
    }
  }
  .bg-effect-mid {
    bottom: 0;
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: #00000063;
  }

  .home-tut {
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-around;
    min-height: 600px;
    .left {
      flex: 1;
      color: white;
      max-width: 600px;
      min-width: 300px;
      padding: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .right {
      flex: 1;
      max-width: 600px;
      min-width: 600px;
      min-height: 500px;
      position: relative;
      .home-tut-vdo {
        position: absolute;
        z-index: 1;
        top: 100px;
        /* right: 45px; */
        left: 75px;
        height: 275px;
        width: 475px;
        z-index: 0;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/gifs/home-tut.gif");
      }
      .home-tut-frame {
        position: absolute;
        height: 600px;
        width: 600px;
        background-repeat: no-repeat;
        background-image: url("/assets/home-tv.png");
        z-index: 2;
      }
    }
  }
  .home-player {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    min-height: 500px;
    .right {
      flex: 1;
      padding: 40px;
      max-width: 600px;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .left {
      flex: 1;
      min-width: 500px;
      max-width: 600px;
      min-height: 500px;
      flex: 1;
      position: relative;
      .home-player-frame {
        position: absolute;
        height: 600px;
        width: 600px;
        background-repeat: no-repeat;
        background-image: url("/assets/home-player.png");
        z-index: 2;
      }
      .home-player-vdo {
        position: absolute;
        top: 60px;
        z-index: 1;
        left: 140px;
        height: 200px;
        width: 360px;
        z-index: 0;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/gifs/home-player-vdo.webp");
      }
    }
  }
  .home-child {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    min-height: 600px;
    color: white;
    .left {
      max-width: 600px;
      display: flex;
      padding: 60px;
      flex-direction: column;
      justify-content: center;
    }
    .right {
      max-width: 640px;
    }
  }
  @media screen and (max-width: 900px) {
    .home-tut {
      flex-wrap: wrap;
      .left {
        padding: 60px !important;
      }
    }
    .home-player {
      flex-wrap: wrap-reverse;
      .right {
        padding: 60px !important;
      }
    }
    .home-child .left {
      padding: 60px;
    }
  }
`;
export default GetStarted;
