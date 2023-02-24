import styles from "./Search.module.css";

export default function Search() {
  return (
    <form className={Styles.searchContainer}>
      <div className={styles.searchBox}>
        <input className={styles.} type="text" />
        <button type="submit">Buscar</button>
      </div>
    </form>
  );
}
