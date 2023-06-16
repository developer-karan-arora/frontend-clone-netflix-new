import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
export default function Test() {
  return (
    <Container>
      <p className="sidebr">
        <Link to="home">Home</Link>
        <br />
        <Link to="trend">Trend</Link>
        <br />
        <Link to="movie">movie</Link>
        <br />
        <Link to="tv">tv</Link>
      </p>
      <hr />
      <Routes>
        <Route path="" element={<></>}></Route>
      </Routes>
    </Container>
  );
}
const Container = styled.div``;
