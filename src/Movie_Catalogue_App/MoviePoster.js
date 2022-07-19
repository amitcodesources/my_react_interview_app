import React from 'react'

const MoviePoster = (props) => {

    const moviePosterStyle = {
        borderRadius: "5%",
        maxWidth: "48vh",
        maxHeight: "60vh",
        width: "auto",
        height: "auto"
      };

  return (
    <img style={moviePosterStyle} src={props.posterUrl} alt={props.movieTitle} />
  )
}

export default MoviePoster