const API_URL = "https://api.themoviedb.org/3"

export function getMovies(path) {
	return fetch(API_URL + path, {
		headers: {
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjE2M2VmNzVjOGUzNGExZDZjNjIyZmY5OTU4ODMzZSIsInN1YiI6IjVmZDcxNDI2Y2ZlNDhmMDAzZjUwMjJkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hXd4qPIITHeueyZcO1CdR1vG_jdDSh7UC8htnCI7onU',
			'Content-Type': 'application/json;charset=utf-8',
		},
	}).then((result) => result.json())
}
