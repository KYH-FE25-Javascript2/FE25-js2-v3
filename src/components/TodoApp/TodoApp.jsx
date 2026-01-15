import { useState } from "react";
import TodoHeader from "./../TodoHeader/TodoHeader";
import TodoList from "./../TodoList/TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([
    "Lära mig React",
    "Åka å handla",
    "Lära oss props",
  ]);
  const [newTodo, setNewTodo] = useState("");

  function handleClickMandus() {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  function handleRemoveTodo(indexToRemove) {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  }

  return (
    <>
      <TodoHeader />

      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Skriv in en todo"
      />

      <button onClick={handleClickMandus}>Spara denna todo</button>

      {/* <TodoList todosArr={todos} /> */}
      <TodoList todosArr={todos} onRemove={handleRemoveTodo} />
    </>
  );
}

export default TodoApp;
