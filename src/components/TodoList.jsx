import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  function handleDelete(indexToDelete) {
    setTodos((currentTodos) =>
      currentTodos.filter((_, index) => index !== indexToDelete),
    );
  }

  function handleToggle(indexToToggle) {
    setTodos((currentTodos) =>
      currentTodos.map((todo, index) =>
        index === indexToToggle ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  return (
    <div className={styles.list}>
      {todos.map((item, index) => (
        <TodoItem
          key={`${item.name}-${index}`}
          item={item}
          onDelete={() => handleDelete(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
