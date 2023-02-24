import styles from "./Search.module.css";

export default function Search() {
  return (
    <form className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <input className={styles.searchInput} type="text" />
        <button className={styles.searchInput} type="submit">Buscar</button>
      </div>
    </form>
  );
}
