import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useQuery } from "../../hooks/useQuery";

export default function Search() {
  const query = useQuery();
  const search = query.get("search")

  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/?search=" + searchText)
  };

  useEffect(() => {
    setSearchText(search || "")
  }, [search]);
  return (
    
  );
}
