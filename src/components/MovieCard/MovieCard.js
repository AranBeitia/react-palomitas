import { Link } from "react-router-dom"
import styles from "./MovieCard.module.css"

function MovieCard({ movie }) {
  const URL_IMG = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
	return (
		<li className={styles.card}>
			<Link to={/movies/+movie.id}>
			<img className={styles.card__image} src={URL_IMG} alt={movie.title} />
			<span>{movie.title}</span>
			</Link>
		</li>
	)
}

export default MovieCard
