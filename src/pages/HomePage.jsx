import React, { useContext, useState} from 'react'
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
  const [clickedMovie , setClickedMovie] = useState('');

  // const handleClickedMovie = () => {
  //   return(

  //   )
  // }
  //handle clicked series

  return (
    <main className="homepageContainer">
      <div className="subContainer">
        <div className="headline">Popular Movies</div>
        <ul className="cardContainer">
          {/*shows each movie card */}
          {popMovies.map( (popMovie) => {
            return (
              <li className="card" key= {popMovie.id} onClick= {()=>{setIsMovie(true);
                setClickedMovie(popMovie)
              }}>
                <CardMovie movie= {popMovie} clickedMovie = {clickedMovie}/>
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
    
    </main>
    
  )
}

export default HomePage