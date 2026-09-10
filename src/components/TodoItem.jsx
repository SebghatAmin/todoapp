import styles from "./todoitem.module.css";
export default function TodoItem({ item, onDelete }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
        <span>
          <button
            type="button"
            onClick={onDelete}
            className={styles.deleteButton}
            aria-label={`Delete ${item}`}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
