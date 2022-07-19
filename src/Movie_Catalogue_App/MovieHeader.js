import React from 'react'

const headerstyle = {
  height: 60+'px',
  backgroundColor: "#20232a",
  color: "#fff",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
}

const MovieHeader = () => {
  return (
    <div className="header" style={headerstyle}>
      <h1>{"🎥 Movie Catalogue"}</h1>
    </div>
  )
}

export default MovieHeader;



