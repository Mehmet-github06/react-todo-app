import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Header = ({setTodos,todos}) => {
  const [task, setTask] = useState("");

  const addTodo = () => {
    const newtoDo ={
        id:uuidv4(),
        text:task,
        completed:false
    }
    setTodos([...todos,newtoDo]);
    setTask("")
    console.log(newtoDo)
  }

  return (
    <div className="text-center text-info m-5">
      <h1 className="mb-3">Todo App</h1>
      <InputGroup className="mb-3 w-70 d-flex mx-auto">
        <Form.Control
          placeholder="Enter new to do..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button
          type="button"
          className="input-group-text bg-success"
          id="basic-addon2"
          onClick={addTodo}
          disabled={!task.trim()}
        >
          @example.com
        </Button>
      </InputGroup>
    </div>
  );
};

export default Header;
