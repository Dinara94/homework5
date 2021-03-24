import React from "react";
import StickersListItem from "../sticker-item/StickersListItem";

import "./stickersList.css";

export default function StickersList({list, onUpdate, onDelete}) {

  return (
    <ul className="stickers-grid">
      {list.map((item) => (
        <StickersListItem
          key={item.id}
          item={item}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
