import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

function PlayListInfo2({
  title = "",
  artist = "",
  url = "",
  onAddMusic = (f) => f,
  onUpdateMusic = (f) => f,
  // onPlayer = (f) => f,
}) {
  const [txtTitle, setTitle] = useState(title);
  const [txtArtist, setArtist] = useState(artist);
  const [txtAddress, setAddress] = useState(url);

  const Player = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Text = styled.span`
    text-align: left;
    font-size: 20px;
    border-radius: 5px;
    background-size: 10px;
  `;

  const handleSubmit = (event2) => {
    event2.preventDefault();
    if (title) {
      onUpdateMusic(txtTitle, txtArtist, txtAddress);
    } else {
      onAddMusic(txtTitle, txtArtist, txtAddress);
    }
  };
  return (
    <div>
      <Text>{title}</Text> - <Text>{artist}</Text>
      <Player>
        <ReactPlayer
          className="player"
          url={"'" + url + "'"}
          width="750px"
          heigth="800px"
          playing={true}
          muted={true}
          controls={true}
        />
      </Player>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={txtTitle}
          onChange={(event2) => setTitle(event2.target.value)}
          placeholder="Title"
          required
        ></input>
        <input
          type="text"
          value={txtArtist}
          onChange={(event2) => setArtist(event2.target.value)}
          placeholder="Artist"
          required
        ></input>
        <input
          type="text"
          value={txtAddress}
          onChange={(event2) => setAddress(event2.target.value)}
          placeholder="URL"
          required
        ></input>
        <input type="submit" value={title ? "수정" : "추가"}></input>
      </form>
    </div>
  );
}

export default PlayListInfo2;
