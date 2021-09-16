import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getMovies } from "../../utils/httpClient"
import movie from "../../MovieDetail.json"
import styles from "./MovieDetails.module.css"

function MovieDetails() {
	const { movieId } = useParams()
	const [movie, setMovie] = useState(null)
	useEffect(() => {
		getMovies("/movie/" + movieId).then(data => {
			setMovie(data)
		})
	}, [movieId])

	if (!movie) {
		return null
	}
	
	const URL_IMG = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
	return (
		<>
			<h1 className="text-center">Movie details</h1>
			<main className={styles.container}>
				<img className={styles.image} src={URL_IMG} alt={movie.title} />
				<div>
					<p><span className="text-bold">Title:</span> {movie.title}</p>
					<p><span className="text-bold">Description:</span> {movie.overview}</p>
					<p><span className="text-bold">Genres:</span> {movie.genres.map(genre => genre.name).join(', ')}</p>
				</div>
			</main>
		</>
	)
}

export default MovieDetails
