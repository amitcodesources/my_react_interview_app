import React from 'react'

const MovieInfo = (props) => {
  return (
    <div>
      <span>
        <strong>{`${props.label}: `}</strong>
      </span>
      <span>{props.value}</span>
    </div>
  )
}

export default MovieInfo