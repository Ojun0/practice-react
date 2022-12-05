import { useState } from "react";
import "./App.css";
import PlayList1 from "./component/PlayList1";
import PlayList2 from "./component/PlayList2";
import musicdata from "./data/music-data.json";
import PlayListInfo from "./component/PlayListInfo";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
// import styled from "styled-components";

function App() {
  const [musics, setMusic] = useState(musicdata.playList1);

  const addMusic = (title, artist, url) => {
    const newMusic = { title, artist, url };
    setMusic([...musics, newMusic]);
  };

  const removeMusic = (title) => {
    const newMusic = musics.filter((music) => music.title !== title);
    setMusic(newMusic);
  };

  const updateMusic = (title, artist, url) => {
    const newMusic = musics.map((music) =>
      music.title === title ? { title, artist, url } : music
    );
    setMusic(newMusic);
  };

  // const Card = styled.div`
  // display: flex;
  // flex-direction: column;
  // flex: 1;
  // min-width: 150px;
  // height: 200px;
  // margin: 8px;
  // background-color: white;
  // border-radius: 8px;
  // `;

  return (
    <div className="App">
      {/* <Card> */}
      <Home title="Welcome to my music blog!!"></Home>
      <Routes>
        <Route
          path="/playlist1"
          element={
            <PlayList1
              musics={musics}
              PlayList="PlayList1"
              onRemoveMusic={removeMusic}
              onUpdateMusic={updateMusic}
            ></PlayList1>
          }
        />
        <Route
          path="/add1"
          element={<PlayListInfo onAddMusic={addMusic}></PlayListInfo>}
        />
        <Route
          path="playlist2"
          element={<PlayList2 title="PlayList2"></PlayList2>}
        ></Route>
      </Routes>
      {/* </Card> */}
    </div>
  );
}

export default App;
