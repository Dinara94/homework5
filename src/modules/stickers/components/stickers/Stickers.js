import React, { useEffect, useState } from "react";
import StickersList from "../stickers-list/StickersList";
import {
  createSticker,
  deleteSticker,
  getStickers,
  updateSticker,
} from "../../services/stickersService";

import "./stickers.css";

export default function Stickers() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getStickers().then((list) => setList(list));
  }, [list]);

  const createItem = (sticker) => {
    createSticker(sticker).then((data) => {
      setList([...list, data]);
    });
  };

  const updateItem = (sticker) => {
    updateSticker(sticker).then((data) => {
      setList(list.map((item) => (item.id === data.id ? data : item)));
    });
  };


  const deleteItem = (id) => {
    deleteSticker(id);
    setList(list.filter((item) => item.id !== id));
  };


  return (
    <>
      <header className="header">
        <button className="header-button" onClick={createItem}>
          Add new sticker
        </button>
      </header>
      <StickersList list={list} onUpdate={updateItem} onDelete={deleteItem} />
    </>
  );
}
