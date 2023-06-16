import styled from "styled-components";

export default function Slider(props) {
  return (
    <Container>
      {props.homeData.map((element, index) => {
        return (
          <div key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
              alt=""
              onClick={() => {
                console.table(element);
                props.setCurrentMovieDetail(element);
              }}
            />
          </div>
        );
      })}
    </Container>
  );
}
const Container = styled.div`
  padding-top: 10px;
  height: 225px;
  width: 100vw;
  background-color: #000000c2;
  display: flex;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  img {
    filter: brightness(80%);
    height: 200px;
    margin: 0 4px;
    border-radius: 2px;
  }
`;
