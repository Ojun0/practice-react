import React from "react";
import { useState } from "react";
import PlayListInfo from "./PlayListInfo";
// import ReactPlayer from "react-player";

function PlayListItem({
  // id = "",
  title = "",
  artist = "",
  url = "",
  onRemove = (f) => f,
  onUpdate = (f) => f,
}) {
  const [editable, setEditable] = useState(false);
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
      <p onClick={() => (editable ? setEditable(false) : setEditable(true))}>
        {title}
        <button onClick={() => onRemove(title)}>삭제</button>
      </p>
      {editable ? (
        <PlayListInfo
          // id={id}
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

export default PlayListItem;
