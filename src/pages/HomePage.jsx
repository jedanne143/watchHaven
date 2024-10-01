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
  //handle clicked movie
  const [isMovie, setIsMovie] = useState(false);
  // holds the info of clicked movie
  const [clickedMovie , setClickedMovie] = useState(null);

  const containerRef = useRef(null)
  //to clear contents  when close button of selected movie is clicked
  const clearContent = () => {
    if (containerRef.current){
      setIsMovie(false)
    }
  }

    //handle clicked TV series
    const [isSeries, setIsSeries] = useState(false);
    // holds the info of clicked movie
    const [clickedSeries , setClickedSeries] = useState(null);
    const containerSeriesRef = useRef(null)
      //to clear contents  when close button of selected TV Series is clicked
  const clearContentSeries = () => {
    if (containerSeriesRef.current){
      setIsSeries(false)
    }
  }

  return (

    <main className="homepageContainer">
      <div className="subContainer">
            {/* Conditionally render clicked movie details */}
            {isMovie && clickedMovie && (
            <div className="clickedContainer" ref={containerRef}>
              <img src={`https://image.tmdb.org/t/p/w500${clickedMovie.poster_path}`} alt={clickedMovie.title} />
              <div className="rightContainer">
                <button className="closeBtn" onClick={clearContent}>x</button>
                <div className="clickedInfo">Title: <span> {clickedMovie.title} </span></div>
                <div className="clickedInfo">Release Date: <span>{clickedMovie.release_date}</span></div>
                <div className="clickedInfo">Average vote: <span>{clickedMovie.vote_average}</span></div>
                <div className="clickedOverview">Overview: <span>{clickedMovie.overview}</span></div>
              </div>
            </div>
          )}
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

      <div className="subContainerTV">
        <div className="headline">Popular Series</div>
        {/* Conditionally render clicked TV Series details */}
        {isSeries && clickedSeries && (
        <div className="clickedContainerTV clickedContainer" ref={containerSeriesRef}>
          <img src={`https://image.tmdb.org/t/p/w500${clickedSeries.poster_path}`} alt={clickedSeries.name} />
          <div className="rightContainer">
            <button className="closeBtn" onClick={clearContentSeries}>x</button>
            <div className="clickedInfo">Title: <span> {clickedSeries.name} </span></div>
            <div className="clickedInfo">Country: <span> {clickedSeries.origin_country} </span></div>
            <div className="clickedInfo">Release Date: <span>{clickedSeries.first_air_date}</span></div>
            <div className="clickedInfo">Average vote: <span>{clickedSeries.vote_average}</span></div>
            <div className="clickedOverview">Overview: <span>{clickedSeries.overview}</span></div>
          </div>
        </div>
      )}
        <ul className="cardContainer">
          {/*shows each TV series card */}
          {popSeries.map( (popTV) => {
            return (
              <li 
              className="card" 
              key= {popTV.id}
              onClick= {()=>{
                setIsSeries(true);
                //Store the data of clicked TV series
                setClickedSeries(popTV)
              }}
              >
                <CardTV series= {popTV} />
              </li>
            )
          } )}

        </ul>
        
      </div>




    </main>
    
  )
}

export default HomePage