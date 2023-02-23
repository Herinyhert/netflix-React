import styles from "./MovieDetail.module.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../../utils/httpClients";

function MovieDetail() {

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(()=>{
    get("/movie/" + movieId).then((data)=>{
      setMovie(data)
    })
  }, [movieId])

  if(!movie){
    return null;
  }

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
