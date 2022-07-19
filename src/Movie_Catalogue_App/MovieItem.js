import React from 'react'

const MovieItem = (props) => {
  // let selected = true;
  const movieItemStyle = {
    // backgroundColor: selected ? "#a9b3c4" : "#ececec",
    // fontWeight: selected ? "bold" : "normal",
    backgroundColor: "#a9b3c4",
    fontWeight: "bold",
    cursor: "pointer",
    paddingLeft: "0.75em",
    paddingRight: "0.75em",
    paddingTop: "0.2em",
    paddingBottom: "0.2em",
    color: "##1a1a1a"
  }

  const { id, title, onMovieSelected } = props;

  return (
    // <div style={movieItemStyle} onClick={() => console.log(title)}>
    //   {title}
    // </div>
    <div onClick={() => onMovieSelected && onMovieSelected(id)}
      style={movieItemStyle}>
      {title}
    </div>
  )
}

export default MovieItem