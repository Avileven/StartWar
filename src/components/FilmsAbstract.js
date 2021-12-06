import { useState } from 'react'
import './films.css'

export default function FilmsData({films}) {
  

  return (
  <div className="abstract">
      <h2>Films list </h2>
      {films.map(film => (
        <div className="film-abstract" key={film.title} >
        
            <h2>Name:{ film.title }</h2>
            <h3>Director: { film.director }</h3>
            <h4>Date: { film.release_date }</h4>
         
        </div>
       ))}
  </div>
  );
}
