import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  function handleDelete(indexToDelete) {
    setTodos((currentTodos) =>
      currentTodos.filter((_, index) => index !== indexToDelete),
    );
  }

  return (
    <div className={styles.list}>
      {todos.map((item, index) => (
        <TodoItem
          key={`${item}-${index}`}
          item={item}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
}
