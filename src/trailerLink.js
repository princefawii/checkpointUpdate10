import React from 'react'
import { Link, useParams } from 'react-router-dom'
import movieArr from './movieObjArr';

function TrailerLink() {
  const { movieId } = useParams();
  const movie = movieArr[movieId];
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie && movie.description}</p>
      <a href={movie && movie.trailerLink}>trailer</a>
      <br />
      <br />
      <Link to="/">Back to home</Link>
    </div>
  )
}

export default TrailerLink
