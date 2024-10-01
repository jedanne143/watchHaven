import React, {useRef} from 'react'
import "./CardMovie.css"

function CardMovie({movie}) {

 
  return (
    <div className="cardC">
        {/* shows the poster */}
        <img 
        className="cardImage" 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title} 
        />
        {/* shows the title */}
        <div>{movie.title}
        {/* shows the year*/}
        <span>- {movie.release_date.split('-')[0]}</span>
        </div>  

 
    </div>
  )
}

export default CardMovie