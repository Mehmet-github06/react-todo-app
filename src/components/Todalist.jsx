import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const Todalist = ({ todos, setTodos }) => {
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  };

  return (
    <div>
      <h2 className="text-center text-warning">Todos</h2>
      <ListGroup className="w-60 d-flex mx-auto ">
        {todos.map((todo) => (
          <ListGroup.Item
            className="m-2 text-capitalize rounded-5 d-flex justify-content-between"
            variant="warning"
          >
            <span>{todo.text}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="red"
              role="button"
              className="bi bi-trash"
              viewBox="0 0 16 16"
              onClick={() => deleteTodo(todo.id)}
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
            </svg>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Todalist;
