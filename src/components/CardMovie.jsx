import React from 'react'

function Card({movie,  clickedMovie}) {
  return (
    <>
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

        {/* if ({isMovie}){
          return(

          )
        }     */}
    </>
  )
}

export default Card