import React from "react";
import { useState } from "react";
import PlayListItem from "./PlayListItem";

function PlayList1({
  PlayList,
  musics = [],
  onRemoveMusic = (f) => f,
  onUpdateMusic = (f) => f,
}) {
  const [findMusic, setMusic] = useState("");

  return (
    <div>
      <h1>{PlayList}</h1>
      <input
        type="text"
        value={findMusic}
        onChange={(event) => setMusic(event.target.value)}
        placeholder="muisc title to find..."
      ></input>
      {musics
        .filter((music) => music.title.includes(findMusic))
        .map((music) => (
          <PlayListItem
            key={music.title}
            {...music}
            onRemove={onRemoveMusic}
            onUpdate={onUpdateMusic}
          ></PlayListItem>
        ))}
    </div>
  );
}

export default PlayList1;
