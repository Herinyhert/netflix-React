import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa"

export default function Search() {
    const handleSubmit = (e) =>{

    }
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input className={styles.searchInput} type="text" />
        <button className={styles.searchButton} type="submit">
          <FaSearch size={20}/>
        </button>
      </div>
    </form>
  );
}
