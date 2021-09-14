import { Link }from 'react-router-dom'

function TheHeader() {
	return (
		<header>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/movies">Movie</Link>
			</nav>
		</header>
	)
}

export default TheHeader
