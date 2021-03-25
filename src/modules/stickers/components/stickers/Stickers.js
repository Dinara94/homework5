import React from "react";
import StickersList from "../stickers-list/StickersList";
import useStickers from '../../services/stickersService';

import "./stickers.css";

export default function Stickers() {
  const { stickers, addSticker, deleteSticker, updateSticker} = useStickers();

  function createItem() {
    addSticker();
  };

  function updateItem(sticker) {
    updateSticker(sticker);
  };

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
      <StickersList list={stickers} onUpdate={updateItem} onDelete={deleteItem} />
    </>
  );
}
