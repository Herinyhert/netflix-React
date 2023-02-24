import styles from "./Search.module.css";

export default function Search() {
  return (
      <form>
    <div className={StyleSheet.searchContainer}>
        <input type="text" />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}
