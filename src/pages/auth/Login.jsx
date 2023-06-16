import React, { useState } from "react";
import { firebaseAuth } from "../../utils/firebase-config";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();
  let [formDetails, setFormDetails] = useState({ email: "", password: "" });
  function handleChange(event) {
    setFormDetails({
      ...formDetails,
      [event.target.name]: event.target.value
    });
  }
  async function handleForm() {
    try {
      const { email, password } = formDetails;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      console.log("User Verified successfully");
    } catch (err) {
      console.log(err.code);
      switch (err.code) {
        case "auth/wrong-password":
          alert("Wrong Password. Please try again.");
          break;
        case "auth/user-not-found":
          alert("User not found. Please try again.");
          break;
        case "auth/too-many-requests":
          alert("You created too many requests. Try After some time.");
          break;
        default:
          alert("Unable to resolve");
          break;
      }
    }
  }
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/home");
  });
  return (
    <Container className="">
      <div className="bg-effect-mid">
        <div className="bg-effect-top"></div>
        <div className="login-component">
          <h2>Sign In</h2>
          <small>Welcome Back User</small>
          <br />
          <small>Hope You are Doing Well</small>
          <br />
          <br />
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Enter Email"
            value={formDetails.email}
            onChange={(e) => handleChange(e)}
          />
          <input
            id="password"
            name="password"
            type="text"
            placeholder="Enter Password"
            value={formDetails.password}
            onChange={(e) => handleChange(e)}
          />
          <button onClick={handleForm}>Log In</button>
          <div>
            <br />
            <small>
              New User ? <Link to="/register">Create a new account</Link>
            </small>
          </div>
        </div>
        <div className="bg-effect-bottom"></div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  background: url("/backgrounds/netflix-home-bg.jpg");
  background-size: cover;
  height: 100vh;
  input {
    color: white;
  }
  small {
    font-size: 12px;
    color: grey;
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
    height: 200px;
    position: absolute;
    background-image: linear-gradient(to top, #000000, transparent);
  }
  .bg-effect-mid {
    bottom: 0;
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: #00000063;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login-component {
    color: white;
    background-color: #09070cbc;
    padding: 50px 30px;
    h2 {
      padding: 20px 10px;
    }
    button,
    input {
      display: block;
      width: 300px;
      padding: 10px 30px;
      margin: 8px;
      background-color: #343434;
      border-radius: 3px;
      border: none;
      outline: none;
    }
    button {
      margin-top: 20px;
      background: rgb(229, 9, 20);
      color: white;
      font-weight: 500;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      cursor: pointer;
      height: 36px;
    }
    button:hover {
      background: rgb(245, 9, 20);
      font-size: 14px;
    }
  }
  @media screen and (max-width: 600px) {
    .home-hero {
      padding-top: 75px !important;
    }
    .bg-effect-bottom {
      bottom: 10vh;
      height: 100px;
    }
  }
`;
export default Login;
