import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <header>
        <img
          src="netlix-logo-pro.png"
          alt="logo"
          className="logo"
          height="75px"
        />
        <div className="right">
          <Link to="/login">
            <button>SignIn</button>
          </Link>
        </div>
      </header>
    </Container>
  );
}
const Container = styled.div`
  header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10px;
  }
  header .right {
    button {
      margin: 0 10px;
      border: none;
      outline: none;
      font-size: 0.875rem;
      font-weight: 500;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      padding: 7px 30px;
      background: rgb(229, 9, 20);
      color: rgb(255, 255, 255);
      user-select: none;
      border: 0;
      border-radius: 1px;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 500px) {
    header {
      padding-top: 60px;
    }
  }
`;

export default Header;
