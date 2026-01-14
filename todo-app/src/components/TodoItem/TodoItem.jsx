function TodoItem({ text, priorite }) {
  return (
    <li>
      {text}. Prioritering: {priorite}.
    </li>
  );
}

export default TodoItem;
