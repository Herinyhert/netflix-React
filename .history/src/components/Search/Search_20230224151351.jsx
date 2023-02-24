import styles from "./Search"
export default function Search() {
  return (
    <div className={StyleSheet.searchContainer}>
      <form>
        <input type="text" />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}
