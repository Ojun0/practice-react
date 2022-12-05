import React from "react";
import { useState } from "react";
import PlayListInfo2 from "./PlayListInfo2";
// import ReactPlayer from "react-player";
import styled from "styled-components";

function PlayListItem2({
  title = "",
  artist = "",
  url = "",
  onRemove = (f) => f,
  onUpdate = (f) => f,
}) {
  const [editable, setEditable] = useState(false);

  const Del = styled.button`
    border-radius: 4px;
    color: "#eee";
    border-style: solid;
    border-width: 1px;
    margin-left: 10px;
  `;

  const MusicList = styled.p`
    margin: 40px;
  `;

  const Title = styled.span`
    font-size: 25px;
    font-weight: bold;
    color: #444;
  `;
  // const player = () => {
  //   <ReactPlayer
  //     className="player"
  //     url={""}
  //     width="700px"
  //     heigth="700px"
  //     playing={true}
  //     muted={true}
  //     controls={true}
  //   />;
  // };
  return (
    <div>
      <MusicList
        onClick={() => (editable ? setEditable(false) : setEditable(true))}
      >
        <Title>{title}</Title>
        <Del onClick={() => onRemove(title)}>삭제</Del>
      </MusicList>
      {editable ? (
        <PlayListInfo2
          title={title}
          artist={artist}
          url={url}
          onUpdateMusic={onUpdate}
          // onPlayer={player}
        />
      ) : null}
    </div>
  );
}

export default PlayListItem2;
