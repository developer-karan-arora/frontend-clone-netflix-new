import { BrowserRouter, Route, Routes } from "react-router-dom";

import Welcome from "./pages/common/Welcome";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/auth/Login";
import Logout from "./pages/auth/Logout";
import Signup from "./pages/auth/Signup";
import Home from "./pages/Home";

import "./styles.css";
import "./styleGlobal.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/start" element={<GetStarted />} />
          <Route path="/home/*" element={<Home />} />
          {/* <Route path="/home/movie/moviedetail/*" element={<MovieDetail />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
