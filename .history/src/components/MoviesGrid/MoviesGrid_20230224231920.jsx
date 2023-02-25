import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { get } from "../../utils/httpClients";
import { Spinner } from "../Loading/Spinner";
import { MovieCard } from "../MovieCard/MovieCard";

import style from "./MoviesGrid.module.css";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLodin, setisLodin] = useState(true);

  return new (useLocation().search)

  useEffect(() => {
    setisLodin(true);
    get("/discover/movie").then((data) => {
      // console.log(movies)
      setMovies(data.results);
      setisLodin(false);
    });
  }, []);

  if (isLodin) {
    return <Spinner />;
  }

  return (
    <ul className={style.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
