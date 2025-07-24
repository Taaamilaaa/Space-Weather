import styles from "./Button.module.css";

export function Button({ type, children }) {
  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  );
}
