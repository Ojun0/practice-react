import { useState } from "react";
import "./App.css";
import PlayList1 from "./component/PlayList1";
import PlayList2 from "./component/PlayList2";
import musicdata from "./data/music-data.json";
import PlayListInfo from "./component/PlayListInfo";
// import { v4 } from "uuid";

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
  return (
    <div className="App">
      <PlayList1
        musics={musics}
        PlayList="PlayList1"
        onRemoveMusic={removeMusic}
        onUpdateMusic={updateMusic}
      ></PlayList1>
      <PlayListInfo onAddMusic={addMusic}></PlayListInfo>
      <PlayList2 title="PlayList2"></PlayList2>
    </div>
  );
}

export default App;
