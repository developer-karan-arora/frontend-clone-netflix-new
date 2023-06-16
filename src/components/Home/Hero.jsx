import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function Hero() {
  return (
    <Container>
      <div className="home-hero">
        <h1 className="hero-comp">Unlimited movies, TV shows and more</h1>
        <p className="hero-comp">Watch anywhere. Cancel anytime.</p>
        <p className="hero-comp">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div>
          <Link to="/home">
            <button>Get Started </button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .home-hero {
    padding: 50px;
    padding-top: 150px;
    color: white;
    text-align: center;
    /* font-family: Arial, Helvetica, sans-serif; */
    button {
      margin-top: 20px;
      background: rgb(229, 9, 20);
      color: rgb(255, 255, 255);
      border: none;
      font-size: 18px;
      font-weight: 500;
      font-family: Arial, Helvetica, sans-serif;
      border-radius: 2px;
      outline: none;
      padding: 14px;
      width: 100%;
      max-width: 400px;
    }
    button:hover {
      cursor: pointer;
    }
    h1 {
      font-size: 35px;
    }
    p {
      font-size: 16px;
    }
  }
  .hero-comp {
    padding: 5px 0;
    img {
      height: 100%;
      width: auto;
    }
  }
`;
export default Hero;
