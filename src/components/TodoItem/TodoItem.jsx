function TodoItem({ text, onRemove }) {
  return (
    <li>
      {text}
      <button onClick={onRemove}>Ta bort</button>
    </li>
  );
}

export default TodoItem;
