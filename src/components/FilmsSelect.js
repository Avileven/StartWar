
 import { useState,useEffect } from "react";
  import FilmsFav from './filmsFav'

 


  export default function FilmsList({films }) {
  const [list, setList] = useState('');
  const [title, setTitle] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const film = [
      list
    ]
      setTitle(allFilms => {
        
      return [...allFilms, film]  
      
        })
        localStorage.setItem('films', JSON.stringify(title))

  }
  const localData = localStorage.getItem('films');
  const savedfilm=JSON.parse(localData);
  
  return (
<div className="select">
    <div>
      <h1>Select your films</h1>
      {/* <h2>select a title and click "select" to add to your list</h2> */}
    </div>
      {films.map(film => (
        <form onSubmit={handleSubmit} className="select-list" key={film.episode_id} >       
        <label>{film.title}</label>
        <input 
          type="radio" 

          value={film.title}
         
          onChange={(e) => setList(e.target.value)}
          
        />

        <button>Select </button>
       
        </form>
         
       ))}
         
        
      <div className="favorites">
      <h1>Your Favorites Films </h1>
      {title.map(film => (
        <div className="favorites-item" key={film.episode_id} >
        
            <h2>{ film }</h2>
                    
        </div>
       ))}
      </div>
      {/* adding localStorage prop for selection  */}
       <div className='film-fav'>{savedfilm && <FilmsFav savedfilm={savedfilm} /> }</div>
 </div>
  )}

  