import React from "react";
import { useState } from "react";
import PlayListItem from "./PlayListItem";
import styled from "styled-components";
import { Link } from "react-router-dom";

function PlayList1({
  PlayList,
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
      <h1>{PlayList}</h1>
      <p>
        <Link to="/add1"> 노래 추가하기</Link>
      </p>
      <Search
        type="text"
        value={findMusic}
        onChange={(event) => setMusic(event.target.value)}
        placeholder="music title to find..."
      ></Search>
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
