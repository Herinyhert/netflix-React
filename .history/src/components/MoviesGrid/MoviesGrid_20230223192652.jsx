import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../utils/httpClients";
import { MovieCard } from "../MovieCard/MovieCard";

import style from "./MoviesGrid.module.css";

export default function MoviesGrid() {
  
    const [movies, setMovies] = useState([]);

  useEffect(() => {  
    get("/discover/movie").then((data) => {
        // console.log(movies)
        setMovies(data.results)
      });
  },[]);
  return (
    <ul className={style.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
