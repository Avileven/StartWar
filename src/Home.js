import { useState, useEffect } from 'react'
import FilmsSelect from './components/FilmsSelect'
import FilmsAbstract from './components/FilmsAbstract'


export default function Home() {
const [films, setFilms] = useState([])
  


useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then(response => response.json())
      .then(json => setFilms(json.results))
        
},[] )

return (
    <div className="home">
        {/* prop for the start wars data  */}
       <div className='film-abstract'>{ films && <FilmsAbstract films={films} /> }</div>
       {/* prop for the user's selection of titles  */}
       <div className='film-select'>{ films && <FilmsSelect films={films} /> }</div>     
    </div>
  );
}
 
