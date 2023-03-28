import styles from "./Spinner.module.css";

export function Spinner() {
  return (
    <div className={styles.spinner}>
      <div className={styles.loader}>
        <p>Loadin....</p>
      </div>
    </div>
  );
}
