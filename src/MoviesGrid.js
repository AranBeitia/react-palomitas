import movies from './Movies.json'
import MovieCard from './MovieCard'
import styles from "./MoviesGrid.module.css"

function MoviesGrid() {
	return (
		<ul className={styles.grid}>
			{movies.map((movie) => {
				return (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
				)
			})}
		</ul>
	)
}

export default MoviesGrid
