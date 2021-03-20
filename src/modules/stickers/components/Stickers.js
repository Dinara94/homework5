import React, { useEffect, useState } from "react";
import {
  createSticker,
  deleteSticker,
  getStickers,
  updateSticker,
} from "../services/stickersService";
import StickersList from "./StickersList";

import "./stickers.css";

export default function Stickers() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getStickers().then((list) => setList(list));
  }, [list]);

  const toggleItem = (id) => {
    const item = list.find((l) => l.id === id);
    const newItem = { ...item, completed: !item.completed };

    updateSticker(newItem).then(() => {
      setList(list.map((item) => (item.id !== id ? item : newItem)));
    });
  };

  const deleteItem = (id) => {
    deleteSticker(id);
    setList(list.filter((item) => item.id !== id));
  };

  const createItem = (newItem) => {
    newItem.completed = false;
    createSticker(newItem).then((data) => {
      setList([...list, data]);
    });
};

  return (
    <>
        <button className="header-button" onClick={createItem}>Add new sticker</button>
      <StickersList list={list} onToggle={toggleItem} onDelete={deleteItem} />
    </>
  );
}
