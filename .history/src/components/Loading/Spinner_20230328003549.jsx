import styles from "./Spinner.module.css";

export function Spinner() {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}>
        <div class={styles.loadingText}>Cargando...</div>
      </div>
    </div>


  );
}
