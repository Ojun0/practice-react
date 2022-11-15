import React, { useState } from "react";
import SubjectInputForm from "./SubjectInputForm";

function SubjectItem({
  id = "",
  title = "No Title",
  content = "No content",
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
        <SubjectInputForm
          id={id}
          title={title}
          content={content}
          onUpdateNotice={onUpdate}
        />
      ) : null}
    </div>
  );
}

export default SubjectItem;
