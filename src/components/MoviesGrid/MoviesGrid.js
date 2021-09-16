import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getMovies } from "../../utils/httpClient"
// import movies from '../../Movies.json'
import MovieCard from '../MovieCard'
import styles from './MoviesGrid.module.css'

function MoviesGrid() {
	const [movies, setMovies ] = useState([])
	useEffect(() => {
		getMovies('/discover/movie').then(data => {
			setMovies(data.results)
		})
	}, [])
	return (
		<ul className={styles.grid}>
			{movies.map((movie) => {
				return <MovieCard key={movie.id} movie={movie} />
			})}
		</ul>
	)
}

export default MoviesGrid
