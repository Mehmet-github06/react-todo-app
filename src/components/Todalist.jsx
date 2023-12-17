import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const Todalist = ({ todos, setTodos }) => {
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleTodo = (id) => {
    const newList = todos.map((todo) =>
      todo.id === id ? { ...todo, copleted: !todo.copleted } : todo
    );
    setTodos(newList);
  };

  return (
    <div>
      <h2 className="text-center text-primary">Todos</h2>
      <ListGroup className="w-60 d-flex mx-auto ">
        {todos.map((todo) => (
          <ListGroup.Item
            className="m-2 text-capitalize rounded-5 d-flex justify-content-between"
            variant="info"
            // onDoubleClick={()=>toggleTodo(todo.id)}
          >
            <span
              className={
                todo.copleted
                  ? "text-decoration-line-through text-danger"
                  : "text-deceration-none"
              }
            >
              {todo.text}
            </span>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="success"
                className="bi bi-check-circle me-3"
                viewBox="0 0 16 16"
                role="button"
                onClick={()=>toggleTodo(todo.id)}
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="red"
                role="button"
                className="bi bi-trash mr-3"
                viewBox="0 0 16 16"
                onClick={() => deleteTodo(todo.id)}
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
              </svg>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Todalist;
