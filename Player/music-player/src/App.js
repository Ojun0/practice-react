import { useState } from "react";
import "./App.css";
import PlayList1 from "./component/PlayList1";
import PlayList2 from "./component/PlayList2";
import musicdata from "./data/music-data.json";
import PlayListInfo from "./component/PlayListInfo";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import PlayListInfo2 from "./component/PlayListInfo2";
// import styled from "styled-components";

function App() {
  const [musics, setMusic] = useState(musicdata.playList1);
  const [musics2, setMusic2] = useState(musicdata.playList2);

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

  const addMusic2 = (title, artist, url) => {
    const newMusic = { title, artist, url };
    setMusic2([...musics2, newMusic]);
  };

  const removeMusic2 = (title) => {
    const newMusic = musics2.filter((music) => music.title !== title);
    setMusic2(newMusic);
  };

  const updateMusic2 = (title, artist, url) => {
    const newMusic = musics2.map((music) =>
      music.title === title ? { title, artist, url } : music
    );
    setMusic2(newMusic);
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
          element={
            <PlayList2
              musics={musics2}
              PlayList="PlayList2"
              onRemoveMusic={removeMusic2}
              onUpdateMusic={updateMusic2}
            ></PlayList2>
          }
        ></Route>
        <Route
          path="/add2"
          element={<PlayListInfo2 onAddMusic={addMusic2}></PlayListInfo2>}
        />
      </Routes>
      {/* </Card> */}
    </div>
  );
}

export default App;
