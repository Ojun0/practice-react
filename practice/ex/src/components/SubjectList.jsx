import React, { useState } from "react";
import SubjectItem from "./SubjectItem";

function SubjectList({
  subjects = [],
  onRemoveSubject = (f) => f,
  onUpdateSubject = (f) => f,
}) {
  const [findTitle, setTitle] = useState("");

  return (
    <div>
      <input
        type="text"
        value={findTitle}
        onChange={(event2) => setTitle(event2.target.value)}
        placeholder="Title to find..."
      ></input>
      {subjects
        .filter((subject) => subject.title.includes(findTitle))
        .map((subject) => (
          <SubjectItem
            key={subject.id}
            {...subject}
            onRemove={onRemoveSubject}
            onUpdate={onUpdateSubject}
          ></SubjectItem>
        ))}
    </div>
  );
}

export default SubjectList;
