import React, { useState } from "react";
import NoticeInputForm from "./NoticeInputForm";

function NoticeListItem({
  id = "",
  title = "No Title",
  content = "No Content",
  onRemove = (f) => f,
  onUpdate = (f) => f,
}) {
  const [editable, setEditable] = useState(false);

  return (
    <div>
      <h3 onClick={() => (editable ? setEditable(false) : setEditable(true))}>
        {title}
        <button onClick={() => onRemove(id)}>삭제</button>
      </h3>
      {editable ? (
        <NoticeInputForm
          id={id}
          title={title}
          content={content}
          onUpdateNotice={onUpdate}
        />
      ) : null}
    </div>
  );
}

export default NoticeListItem;
