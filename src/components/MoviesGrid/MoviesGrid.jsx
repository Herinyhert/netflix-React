import { MovieCard } from "../MovieCard/MovieCard"
import movies from "../../movies.json"

import style from "./MoviesGrid.module.css"

export default function MoviesGrid() {
    // console.log(movies)
    return (
        <ul className={style.moviesGrid} >
            {movies.map((movie) => 
                <MovieCard key={movie.id} movie={movie}/>
            )}
        </ul>
    )
}