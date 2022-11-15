import React, { useState } from "react";
import NoticeListItem from "./NoticeListItem";

function NoticeList({
  notices = [],
  onRemoveNotice = (f) => f,
  onUpdateNotice = (f) => f,
}) {
  const [findTitle, setTitle] = useState("");

  return (
    <div>
      <input
        type="text"
        value={findTitle}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Title to find..."
      ></input>
      {notices
        .filter((notice) => notice.title.includes(findTitle))
        .map((notice) => (
          <NoticeListItem
            key={notice.id}
            {...notice}
            onRemove={onRemoveNotice}
            onUpdate={onUpdateNotice}
          ></NoticeListItem>
        ))}
    </div>
  );
}

export default NoticeList;
