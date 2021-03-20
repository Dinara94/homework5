import React, { useEffect, useState } from "react";
import "./stickeritem.css";

export default function StickersListItem(props) {
  const onItemClick = () => {
    props.onToggle(props.item.id);
  };

  const onDeleteBtnClick = (e) => {
    e.stopPropagation();
    props.onDelete(props.item.id);
  };

  const { item } = props;

  return (
    <li className="sticker" onClick={onItemClick} style={getItemStyle(item)}>
      <p className="title">Sticker</p>
      <textarea className="text" placeholder="Please enter sticker text..."/>
      <span className="deleteBtn" onClick={onDeleteBtnClick}>X</span>
    </li>
  );
}

function getItemStyle({ completed }) {
  return {
    cursor: "pointer",
    backgroundColor: completed ? "green" : "yellow",
  };
}
