import React, { useState } from "react";

function ToDo() {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);
  const handleClick = () => {
    if (value !== "" && todo !== "") {
      setTodo([
        ...todo,
        {
          id: todo.length + 1,
          text: value.trim(),
        },
      ]);
      setValue("");
    }
  };
  const handleDelete = (id) => {
    const removeItem = todo.filter((value) => {
      return value.id !== id;
    });
    setTodo(removeItem);
  };
  return (
    <div className="todo">
      <div className="container">
        <div className="form">
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className="inpNotes"
            placeholder="add your todo thing"
          />
          <button onClick={handleClick} className="addBtn">
            add
          </button>
        </div>
        <div className="lox">
          {todo.map((value) => (
            <p key={value.id} className="notes">
              {value.text}
              <button onClick={() => handleDelete(value.id)} className="delBtn">
                x
              </button>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToDo;
