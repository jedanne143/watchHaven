import React, { useState, useEffect } from 'react'
const API_KEY = import.meta.env.VITE_API_KEY
import './HomePage.css'
import axios from 'axios'
import CardMovie from '../components/CardMovie'
import CardTV from '../components/CardTV'

function HomePage() {
  const [popMovies, setPopMovies] = useState([])
  const [popSeries, setPopSeries] = useState([])
  // for fetching popular movies
  const getPopMovies = async() => {
    try{
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      const data = res.data
      setPopMovies(data.results)
    } catch (error){
      console.log("Error fetching Movie data from API")
      console.error(error)
    }
  }
  //for fetching popular TV series
  const getPopSeries = async() => {
    try{
      const res = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
      const data = res.data
      setPopSeries(data.results)
      console.log(data.results)
    } catch (error){
      console.log("Error fetching TV Series data from API")
      console.error(error)
    }
  }


  useEffect( () => {
    getPopMovies();
    getPopSeries();
    console.log("fetched data")
  } , [])
  return (
    <main className="homepageContainer">
      <div className="subContainer">
        <div className="headline">Popular Movies</div>
        <ul className="cardContainer">
          {/*shows each movie card */}
          {popMovies.map( (popMovie) => {
            return (
              <li className="card" key= {popMovie.id}>
                <CardMovie movie= {popMovie} />
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