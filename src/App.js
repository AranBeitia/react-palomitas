import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TheHeader from './components/TheHeader'
import Home from './views/Home'
import Movie from './views/MovieDetails'

function App() {
	return (
		<Router>
			<TheHeader />
			<Switch>
				<Route path="/movies/:movieId">
					<Movie />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
