import styles from "./Search.module.css";

export default function Search() {
  return (
    <form className={StyleSheet.searchContainer}>
      <div className={StyleSheet.searchBox}>
        <input type="text" />
        <button type="submit">Buscar</button>
      </div>
    </form>
  );
}
