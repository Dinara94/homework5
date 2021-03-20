import React, { useEffect, useState } from "react";
import StickersListItem from "./StickersListItem";

import "./stickergrid.css";

export default function StickersList({list, onToggle, onDelete}) {

  return (
    <ul className="stickers-grid">
      {list.map((item) => (
        <StickersListItem
          key={item.id}
          item={item}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
