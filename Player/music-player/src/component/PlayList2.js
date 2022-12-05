import React from "react";
import { useState } from "react";
import PlayListItem2 from "./PlayListItem2";
import styled from "styled-components";
import { Link } from "react-router-dom";

function PlayList2({
  PlayList2,
  musics = [],
  onRemoveMusic = (f) => f,
  onUpdateMusic = (f) => f,
}) {
  const [findMusic, setMusic] = useState("");

  const Search = styled.input`
    background-color: #eee;
    border-radius: 8px;
    width: 300px;
  `;

  return (
    <div>
      <h1>{PlayList2}</h1>
      <p>
        <Link to="/add2" style={{ textDecoration: "none" }}>
          노래 추가하기
        </Link>
      </p>
      <Search
        type="text"
        value={findMusic}
        onChange={(event2) => setMusic(event2.target.value)}
        placeholder="music title to find..."
      ></Search>
      {musics
        .filter((music) => music.title.includes(findMusic))
        .map((music) => (
          <PlayListItem2
            key={music.title}
            {...music}
            onRemove={onRemoveMusic}
            onUpdate={onUpdateMusic}
          ></PlayListItem2>
        ))}
    </div>
  );
}

export default PlayList2;
