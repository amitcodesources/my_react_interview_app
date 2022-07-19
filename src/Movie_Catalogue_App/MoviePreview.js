import React from 'react'
import MoviePoster from './MoviePoster';
import MovieLabel from './MovieLabel';
import MovieInfo from './MovieInfo';
import PropTypes from 'prop-types';

const MoviePreview = (props) => {

    const moviePreviewStyle = {
        padding: "0.75em",
        paddingTop: "1em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    }

    MoviePreview.prototype = {
      movieTitle:PropTypes.string,
      posterUrl:PropTypes.string,
      releaseYear:PropTypes.string,
      director:PropTypes.string,
      casts:PropTypes.string,
      genre:PropTypes.string
    }
    
  return (
    <div style={moviePreviewStyle}>
      <MoviePoster movieTitle={props.movieTitle} posterUrl={props.posterUrl} />
      <MovieLabel title={props.movieTitle} year={props.releaseYear} />
      <MovieInfo label={"Director"} value={props.director} />
      <MovieInfo label={"Casts"} value={props.casts} />
      <MovieInfo label={"Genre"} value={props.genre} />
    </div>
  )
}

export default MoviePreview