import styles from "./todoitem.module.css";

export default function TodoItem({ item, onDelete, onToggle }) {
  const itemClassName = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={itemClassName} onClick={onToggle}>
          {item.name}
        </span>
        <span>
          <button onClick={onDelete} className={styles.deleteButton}>
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
