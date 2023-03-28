import styles from "./Spinner.module.css";

export function Spinner() {
  return (
    <div className={styles.loader-Wrapper}>
      <div className={styles.loader}>
        <div class="loading-text">Cargando...</div>
      </div>
    </div>


//     <div class="loader-">
//   <div class="loader"></div>
//   <div class="loading-text">Cargando...</div>
// </div>

  );
}
