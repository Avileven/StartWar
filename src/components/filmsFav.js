import { useState } from 'react'
import './films.css'

export default function FilmsData({savedfilm}) {
   const films = [...savedfilm] ;

  return (
  <div className="favor">
      <h2>your update selection</h2>
      <h3>{films}</h3>
  </div>
  );
}