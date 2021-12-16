import React, { useState } from "react";

function App() {
  const [list, setList] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setList(value);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, list];
    });
    setList("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={list} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
