import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../utils/httpClients";
import { MovieCard } from "../MovieCard/MovieCard";

import style from "./MoviesGrid.module.css";

export default function MoviesGrid() {
  
    const [movies, setMovies] = useState([]);
    const [isLodin, setisLodin] = useState(true);

  useEffect(() => {  
    setisLodin(true)
    get("/discover/movie").then((data) => {
        // console.log(movies)
        setMovies(data.results)
        setisLodin(false)
      });
  },[]);

  if ()

  return (
    <ul className={style.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
