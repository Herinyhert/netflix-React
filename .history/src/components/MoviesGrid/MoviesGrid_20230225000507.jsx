import { useEffect, useState } from "react";
import { useQuery } from "../../hooks/useQuery";
import { get } from "../../utils/httpClients";
import { Spinner } from "../Loading/Spinner";
import { MovieCard } from "../MovieCard/MovieCard";

import style from "./MoviesGrid.module.css";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLodin, setisLodin] = useState(true);

  const query = useQuery();
  const search = query.get("search");
  // console.log(search);

  useEffect(() => {
    setisLodin(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    get(searchUrl).then((data) => {
      // console.log(movies)
      setMovies(data.results);
      setisLodin(false);
    });
  }, [search]);

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
