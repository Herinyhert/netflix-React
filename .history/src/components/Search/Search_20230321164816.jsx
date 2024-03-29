import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useQuery } from "../../hooks/useQuery";
import { useAuth0 } from "@auth0/auth0-react";

export default function Search() {
  const query = useQuery();
  const search = query.get("search")

  const [searchText, setSearchText] = useState("");
  const { isAuthenticated } = useAuth0();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home/?search=" + searchText)
  };

  useEffect(() => {
    setSearchText(search || "")
  }, [search]);
  return (
    isAuthenticated && 8
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
