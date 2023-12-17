import Header from "./components/Header";
import Todalist from "./components/Todalist";
import { useEffect, useState } from "react";

const baslangic = [
  {
    id: new Date().getTime(),
    text: "React ile todo list uygulaması",
    completed: false,
  },
  {
    id: 333,
    text: "id için uuid kullanabilirsin",
    completed: false,
  },
];

function App() {
  const storedTodos = baslangic || JSON.parse(localStorage.getItem("todos")) ;
  const [todos, setTodos] = useState(storedTodos);
    

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])

  return (
    <div className="container">
      <Header setTodos={setTodos} todos={todos} />
      <Todalist todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
