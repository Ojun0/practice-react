import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";

function PlayListInfo({
  // id = "",
  title = "",
  artist = "",
  url = "",
  onAddMusic = (f) => f,
  onUpdateMusic = (f) => f,
  onPlayer = (f) => f,
}) {
  const [txtTitle, setTitle] = useState(title);
  const [txtArtist, setArtist] = useState(artist);
  const [txtAddress, setAddress] = useState(url);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title) {
      onUpdateMusic(txtTitle, txtArtist, txtAddress);
    } else {
      onAddMusic(txtTitle, txtArtist, txtAddress);
    }
  };
  return (
    <div>
      <span>{title}</span> <span>{artist}</span>
      <p>
        <ReactPlayer
          className="player"
          url={"'" + url + "'"}
          width="700px"
          heigth="700px"
          playing={true}
          muted={true}
          controls={true}
        />
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={txtTitle}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
          required
        ></input>
        <input
          type="text"
          value={txtArtist}
          onChange={(event) => setArtist(event.target.value)}
          placeholder="Artist"
          required
        ></input>
        <input
          type="text"
          value={txtAddress}
          onChange={(event) => setAddress(event.target.value)}
          placeholder="URL"
          required
        ></input>
        <input type="submit" value={title ? "수정" : "추가"}></input>
      </form>
    </div>
  );
}

export default PlayListInfo;
