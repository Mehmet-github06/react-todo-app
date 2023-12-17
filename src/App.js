import Header from "./components/Header";
import Todalist from "./components/Todalist";
import { useState } from "react";

const baslangic = [
  {
    id: new Date().getTime(),
    text: "React ile todo list uygulaması",
    completed: false,
  },
  {
    id: new Date().getTime(),
    text: "id için uuid kullanabilirsin",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(baslangic);

  return (
    <div className="container">
      <Header setTodos={setTodos} todos={todos} />
      <Todalist todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
