import React from 'react'

function CardTV({series}) {
  return (
    <>
    {/* shows the poster */}
    <img 
    className="cardImage" 
    src={`https://image.tmdb.org/t/p/w500${series.poster_path}`} 
    alt={series.name} 
    />
    {/* shows the title */}
    <div>{series.name}
    {/* shows the year*/}
    <span>- {series.first_air_date.split('-')[0]}</span>
    </div>      
</>
  )
}

export default CardTV