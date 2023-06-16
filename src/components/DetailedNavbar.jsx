import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
export default function DetailedNavbar(props) {
  return (
    <Container>
      <div>
        <div className="menu">
          <RxHamburgerMenu
            className="sidebarHamburger"
            onClick={() => {
              props.setSidebarVisible(true);
            }}
          />
          <Link to="/start">
            <img src="/netlix-logo-pro.png" alt="" height="60px" />
          </Link>
          <span className="menuItemContainer">
            <Link to="/home">
              <span className="menuItem">Home</span>
            </Link>
            <Link to="trending">
              <span className="menuItem">Trending</span>
            </Link>
            <Link to="movie">
              <span className="menuItem">Movies</span>
            </Link>
            <Link to="tv">
              <span className="menuItem">TvShows</span>
            </Link>
          </span>
        </div>
      </div>
      <div>
        <Link to="/logout">
          <button>Logout</button>
        </Link>
      </div>
    </Container>
  );
}
const Container = styled.div`
  position: absolute;
  z-index: 1;
  background-color: black;
  width: 100%;
  height: 60px;
  opacity: 0.8;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    margin: 0 0 0 30px;
  }
  .sidebarHamburger {
    display: none;
  }
  .menu {
    align-items: center;
    padding: 0 20px;
    display: flex;

    .menuItem {
      padding: 0 10px;
    }
  }
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
    opacity: 1;
  }
  @media screen and (max-width: 600px) {
    .menuItemContainer {
      display: none;
    }
    img {
      margin: 0px;
    }
    .sidebarHamburger {
      display: block;
      height: 20px;
    }
  }
`;
