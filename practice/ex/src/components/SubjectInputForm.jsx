import React, { useState } from "react";

function SubjectInputForm({
  id = "",
  title = "",
  content = "",
  onAddSubject = (f) => f,
  onUpdateSubject = (f) => f,
}) {
  const [txtTitle, setTitle] = useState(title);
  const [txtContent, setContent] = useState(content);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      onUpdateSubject(id, txtTitle, txtContent);
    } else {
      onAddSubject(txtTitle, txtContent);
    }
  };

  return (
    <div>
      <p>{content}</p>
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
          value={txtContent}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Content"
          required
        ></input>
        <input type="submit" value={id ? "수정" : "추가"}></input>
      </form>
    </div>
  );
}

export default SubjectInputForm;
