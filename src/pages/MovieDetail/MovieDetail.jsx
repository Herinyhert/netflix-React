import styles from "./MovieDetail.module.css"
import movie from "./movie.json"

function MovieDetail() {
  const imgDetail = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailsContainer} >
      <img className={`${styles.col} ${styles.movieImage}`} src={imgDetail} alt={movie.title} />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}><strong>Title:</strong>  {movie.title}</p>
        <p><strong>Generos:</strong> {movie.genres.map(genre => genre.name).join(", ")} </p>
        <p><strong>Description:</strong> {movie.overview}</p>
      </div>
    </div>
  );
}
export default MovieDetail;