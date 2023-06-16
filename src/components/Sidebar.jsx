import styled from "styled-components";
import { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
function Sidebar(props) {
  let sidebarRef = useRef();
  useEffect(() => {
    console.log("Checking Consdition ", props.isSidebarVisible);
    if (props.isSidebarVisible) {
      sidebarRef.current.style.display = "block";
    } else {
      sidebarRef.current.style.display = "none";
    }
  }, [props.isSidebarVisible]);
  return (
    <Container>
      <div className="sidebar" ref={sidebarRef}>
        <div className="sidebarTop">
          <div className="close">
            <button
              onClick={() => {
                props.setSidebarVisible(false);
                console.log("clicked", props.isSidebarVisible);
              }}
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="imageContainer">
            <img src="/netlix-logo-pro.png" alt="" width="200px" />
          </div>
        </div>
        <span className="menuItemContainer">
          <Link
            to="/home"
            onClick={() => {
              props.setSidebarVisible(false);
            }}
          >
            <div className="menuItem">Home</div>
          </Link>
          <Link
            to="trending"
            onClick={() => {
              props.setSidebarVisible(false);
            }}
          >
            <div className="menuItem">Trending</div>
          </Link>
          <Link
            to="movie"
            onClick={() => {
              props.setSidebarVisible(false);
            }}
          >
            <div className="menuItem">Movies</div>
          </Link>
          <Link
            to="tv"
            onClick={() => {
              props.setSidebarVisible(false);
            }}
          >
            <div className="menuItem">TvShows</div>
          </Link>
          <hr />
          <div className="menuItem">Working</div>
          <div className="menuItem">Working</div>
        </span>
      </div>
    </Container>
  );
}
let Container = styled.div`
  .sidebar {
    position: absolute;
    display: block;
    height: 100vh;
    width: 300px;
    z-index: 3;
    background: #000000bd;
  }
  .close {
    text-align: right;
    button {
      margin: 10px;
      border-radius: 50%;
      height: 25px;
      width: 25px;
    }
  }
  .menuItemContainer {
    /* display: flex; */
    /* flex-direction: column; */
    padding: 0px 4px;
    .menuItem {
      background-color: #45424599;
      margin: 4px;
      border-radius: 2px;
      font-size: 13px;
      color: lightgray;
      padding: 6px;
    }
  }
  .sidebarTop {
    background-color: #45424599;
    margin-bottom: 10px;
    .imageContainer {
      display: flex;
      justify-content: center;
    }
  }
  @media screen and (max-width: 600px) {
    /* .sidebar {
      display: block !important;
    } */
  }
`;

export default Sidebar;
