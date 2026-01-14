import TodoItem from "./../TodoItem/TodoItem";

function TodoList() {
  return (
    <ul>
      <TodoItem text="Lära mig React" priorite={1} />
      <TodoItem text="Åka å handla " priorite={3} />
      <TodoItem text={"Lära oss props"} priorite={2} />
    </ul>
  );
}

export default TodoList;
