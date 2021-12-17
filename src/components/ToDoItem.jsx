import React, { useState } from "react";

function ToDoItem(props) {
  const [isClicked, setMouseClick] = useState(false);
  function handleClick() {
    if (isClicked === false) {
      setMouseClick(true);
    } else if (isClicked === true) {
      setMouseClick(false);
    }
  }
  return (
    <li style={{ textDecoration: isClicked ? "line-through" : "none" }} onClick={handleClick}>
      {props.text}
    </li>
  );
}

export default ToDoItem;
