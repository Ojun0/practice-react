import React, { useContext, useState } from "react";
import UserInputForm from "./UserInputForm";
import { ThemeContext } from "./ThemeProvider";
function UserListItem({
  id = "",
  name = "No Name",
  point = 0,
  onRemove = (f) => f,
  onUpdate = (f) => f,
}) {
  const [editable, setEditable] = useState(false);

  const { theme } = useContext(ThemeContext); //style 과 함수를 동시에 넘겼기 때문에 구조분해로 받음

  return (
    <div>
      <h3
        style={theme}
        onClick={() => (editable ? setEditable(false) : setEditable(true))}
      >
        {name}, {point}
        <button onClick={() => onRemove(id)}>삭제</button>
      </h3>
      {editable ? (
        <UserInputForm
          id={id}
          name={name}
          point={point}
          onUpdateUser={onUpdate}
        />
      ) : null}
    </div>
  );
}

export default UserListItem;
