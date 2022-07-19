import React from 'react'
import PropTypes from 'prop-types';

import MovieItem from './MovieItem';

const MovieList = (props) => {
  const movieListStyles = {
    backgroundColor: "#ececec",
    height: "100%",
    paddingTop: "1em",
    width: "100%",
    display: "flex",
    flexDirection: "column"
  }

  MovieList.prototype = {
    movieItemList:PropTypes.array,
    selectedMovieId:PropTypes.string,
    onMovieSelected:PropTypes.func
  }

  const { movieItemList, selectedMovieId, onMovieSelected } = props;
  
  return (
    <div style={movieListStyles}>
      { movieItemList.map(({ id, title }) => {
        return (
          <MovieItem
            key={id}
            id={id}
            title={title}
            selected={id === selectedMovieId}
            onMovieSelected={onMovieSelected}
          />
        );
      })}
    </div>
  )
}

export default MovieList