import React from 'react'

import MovieHeader from './MovieHeader'
import MovieCatalogue from './MovieCatalogue';
import data from "./movie-data.json";

export default function MovieCatalogueStartApp() {
  return (
    <>
        <MovieHeader/>
        <MovieCatalogue movieListData={data} />
    </>
  )
}
