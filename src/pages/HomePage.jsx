import React, { useContext, useState, useRef} from 'react'
import {FetchContext} from '../components/FetchContext'
import './HomePage.css'
import CardMovie from '../components/CardMovie'
import CardTV from '../components/CardTV'

function HomePage() {
  // Get data from context
  const { popMovies, popSeries, loading } = useContext(FetchContext); 
  //handle loading state
  if (loading) {
    return <div>Loading...</div>; 
  }
  //handle clicked movies
  const [isMovie, setIsMovie] = useState(false);
  // holds the info of clicked movie
  const [clickedMovie , setClickedMovie] = useState(null);

  const containerRef = useRef(null)
  //to clear contents when close button is clicked
  const clearContent = () => {
    if (containerRef.current){
      setIsMovie(false)
    }
  }

  return (

    <main className="homepageContainer">
      <div className="subContainer">
        <div className="headline">Popular Movies</div>
        <ul className="cardContainer">
          {/*shows each movie card */}
          {popMovies.map( (popMovie) => {
            return (
              <li className="card" 
              key= {popMovie.id} 
              onClick= {()=>{
                setIsMovie(true);
                //Store the data of clicked movie
                setClickedMovie(popMovie)
              }}>
                <CardMovie movie= {popMovie}/>
              </li>
            )
          } )}

        </ul>
      </div>

      <div className="subContainer">
        <div className="headline">Popular Series</div>
        <ul className="cardContainer">
          {/*shows each TV series card */}
          {popSeries.map( (popTV) => {
            return (
              <li className="card" key= {popTV.id}>
                <CardTV series= {popTV} />
              </li>
            )
          } )}

        </ul>
      </div>

      {/* Conditionally render clicked movie details */}
      {isMovie && clickedMovie && (
        <div className="clickedContainer" ref={containerRef}>
          <img src={`https://image.tmdb.org/t/p/w500${clickedMovie.poster_path}`} alt={clickedMovie.title} />
          <div className="rightContainer">
            <button className="closeBtn" onClick={clearContent}>x</button>
            <div className="clickedInfo">Title: <span> {clickedMovie.title} </span></div>
            <div className="clickedInfo">Release Date: <span>{clickedMovie.release_date}</span></div>
            <div className="clickedInfo">Average vote: <span>{clickedMovie.vote_average}</span></div>
            <div className="clickedInfo">Overview: <span>{clickedMovie.overview}</span></div>
          </div>
        </div>
      )}
    
    </main>
    
  )
}

export default HomePage