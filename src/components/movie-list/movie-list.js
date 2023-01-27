import React from 'react'
import MovieItem from '../movie-item/movie-item'
import "../movie-list/movie-list.css"
const MovieList = ({data, onDelete}) => {
  
  return (
    <ul className='movieList'>
      {data.map(item => (

      <MovieItem key = {item.id} name={item.name} viewers = {item.viewers}
       favourite = {item.favourite} onDelete = {()=> onDelete( item.id)} />
      // <MovieItem {...item}/>
      ))}
      {/* <MovieItem  name="Ronald" viewers = "811" />
      <MovieItem name="Empire of Osman" viewers = "811" />
      <MovieItem name="Empire of Osman" viewers = "811" /> */}
    </ul>
  )
}

export default MovieList
