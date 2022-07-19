import React from 'react'

const MovieLabel = (props) => {
  return (
    <>
        <h3>{`${props.title} (${props.year})`}</h3>
    </>
  )
}

export default MovieLabel