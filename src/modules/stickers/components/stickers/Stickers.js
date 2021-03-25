import React, { useEffect, useState } from "react";
import StickersList from "../stickers-list/StickersList";
import useStickers from '../../services/stickersService';

import "./stickers.css";

export default function Stickers() {
  const { stickers, addSticker, deleteSticker } = useStickers();

  function createItem() {
    addSticker();
  }

  function updateItem(sticker) {
    updateSticker(sticker).then((data) => {
      setList(list.map((item) => (item.id === data.id ? data : item)));
    });
  };

  function saveSticker(id) {}


  function deleteItem(sticker) {
    deleteSticker(sticker.id);
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
