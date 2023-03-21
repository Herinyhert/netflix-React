import styles from "./MovieDetail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../../utils/httpClients";
import { Spinner } from "../../components/Loading/Spinner";

function MovieDetail() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  
  useEffect(() => {
    setIsLoading(true);

    get("/movie/" + movieId).then((data) => {
      setIsLoading(false);
      setMovie(data);
    });
  }, [movieId]);

  if (isLoading) {
    return <Spinner />;
  }

  const imgDetail = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
  ;

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imgDetail}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Generos:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}{" "}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
export default MovieDetail;
