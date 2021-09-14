import styles from "./MovieCard.module.css"

function MovieCard({ movie }) {
  const URL_IMG = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
	return (
		<li className={styles.card}>
			<img className={styles.card__image} src={URL_IMG} alt={movie.title} />
			<span>{movie.title}</span>
		</li>
	)
}

export default MovieCard
