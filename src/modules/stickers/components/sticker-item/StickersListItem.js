import React from "react";
import "./stickerItem.css";

export default function StickersListItem(props) {
  const onUpdateText = (e) => {
    props.item.description = e.target.value;
    props.onUpdate(props.item);
  };

  const onDeleteBtnClick = (e) => {
    e.stopPropagation();
    props.onDelete(props.item);
  };

  return (
    <li className="sticker">
      <p className="title">Sticker</p>
      <textarea className="text" placeholder={props.item.description} onBlur={onUpdateText} />
      <span className="deleteBtn" onClick={onDeleteBtnClick}>X</span>
    </li>
  );
}
