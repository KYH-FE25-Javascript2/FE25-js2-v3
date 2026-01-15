import TodoItem from "./../TodoItem/TodoItem";

function TodoList({ todosArr, onRemove }) {
  return (
    <ul>
      {/* <TodoItem text={todosArr[0]} />
      <TodoItem text={todosArr[1]} />
      <TodoItem text={todosArr[2]} /> */}

      {todosArr.map((todo, index) => {
        return (
          <TodoItem
            key={index}
            text={todo + " " + index}
            onRemove={() => onRemove(index)}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
