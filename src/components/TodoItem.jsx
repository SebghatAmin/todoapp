import styles from "./todoitem.module.css";

export default function TodoItem({ item, onDelete }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item.name}
        <span>
          <button onClick={()=>onDelete(item)} className={styles.deleteButton}>
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}