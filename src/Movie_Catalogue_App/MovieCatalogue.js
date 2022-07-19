import React from 'react'
import PropTypes from 'prop-types';
import MoviePreview from './MoviePreview';
import MovieList from './MovieList';

const MovieCatalogue = (props) => {

    const movieCatalogueWrapperStyle = {
        height: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%"
    }

    const movieSectionWrapperStyle = {
        flex: "1 1 50%",
        height: "calc(100vh - 60px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

    const moviePreviewWrapperStyle = {
        ...movieSectionWrapperStyle,
        textAlign: "center",
        marginRight: "1em",
        alignSelf: "flex-start"
    }

    const movieListWrapperStyle = {
        ...movieSectionWrapperStyle,
        textAlign: "left",
        alignSelf: "flex-end"
    }

    MovieCatalogue.propTypes = {
        movieListData: PropTypes.array
    }

    const movieListData = props.movieListData;
    const [selectedMovieId, setSelectedMovieId] = React.useState(movieListData[0].id);
    const selectedMovie = movieListData.find((movie) => movie.id === selectedMovieId) || movieListData[0];
    const { title, poster, year, director, casts, genre } = selectedMovie;

  return (
    <div style={movieCatalogueWrapperStyle}>
      <div style={moviePreviewWrapperStyle}>
        <MoviePreview
          movieTitle={title}
          posterUrl={poster}
          releaseYear={year}
          director={director}
          casts={casts}
          genre={genre}
        />
      </div>
      <div style={movieListWrapperStyle}>
        <MovieList
          movieItemList={movieListData}
          selectedMovieId={selectedMovieId}
          onMovieSelected={setSelectedMovieId}
        />
      </div>
    </div>
  )
}

export default MovieCatalogue