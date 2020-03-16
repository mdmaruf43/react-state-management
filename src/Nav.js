import React, { useContext } from 'react'
import { MovieContext } from './MovieContext';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div>
            <h3>Maruf</h3>
            <p>List of Movie: {movies.length}</p>
        </div>
    )
}

export default Nav;