import movie from "../../MovieDetail.json"
import styles from "./MovieDetails.module.css"

function MovieDetails() {
	const URL_IMG = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
	return (
		<>
			<h1 className="text-center">Movie details</h1>
			<main className={styles.container}>
				<img className={styles.image} src={URL_IMG} alt={movie.title} />
				<p>{movie.title}</p>
			</main>
		</>
	)
}

export default MovieDetails
