import React from 'react'

const Movie = (props) => {
    const {name, price} = props.movie;
    return (
        <div>
            <h2>{name}</h2>
            <p>Price: {price}</p>
        </div>
    )
}

export default Movie;