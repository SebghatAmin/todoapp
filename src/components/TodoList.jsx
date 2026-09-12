import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  function handleDelete(itemToDelete) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo !== itemToDelete),
    );
  }

  function handleToggle(itemToToggle) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo === itemToToggle ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className={styles.list}>
      {sortedTodos.map((item, index) => (
        <TodoItem
          key={`${item.name}-${index}`}
          item={item}
          onDelete={() => handleDelete(item)}
          onToggle={() => handleToggle(item)}
        />
      ))}
    </div>
  );
}
