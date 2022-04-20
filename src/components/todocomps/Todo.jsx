import React from "react";

function Todo({ text, id, todos, setTodos, todo }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    //burda kaldım
  };
  return (
    <div className="todo">
      <button className="complete-btn">
        <i className="fas fa-check-circle"></i>
      </button>

      <li className="todo-item">{text}</li>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fa fa-minus-circle"></i>
      </button>
    </div>
  );
}

export default Todo;
