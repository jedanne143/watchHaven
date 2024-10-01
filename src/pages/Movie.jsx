import React,{useState, useEffect} from 'react'
import axios from 'axios'
const API_KEY = import.meta.env.VITE_API_KEY
import CardMovie from '../components/CardMovie'
import Searchbar from '../components/Searchbar'
import "./Movie.css"

function Movie() {
  const [movies, setMovies] = useState([])
  const [searchValue , setSearchValue] = useState('')
  const [clickedMovie, setClickedMovie] =useState(null)
  const [clickedMovieID, setClickedMovieID] = useState(null)
  //to search movies based on user input
  const searchMovie = async (searchValue) => {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${API_KEY}`);
      //get results of fetch API and store it to movies only if there's data
      if(res.data.results){
       setMovies(res.data.results);
      }
    } catch (error) {
      console.error("Error fetching Movie results from API", error);
    }
  };

  //will call searchMovie when the page loads and when there's a new searchValue
  useEffect( () => {
    if (searchValue) {
      searchMovie(searchValue);
      setClickedMovie(null);
      setClickedMovieID(null);
    } else {
      // Clear movies if searchValue is empty
      setMovies([]); 
    }
  }, [searchValue]);

  //to get a movie based on user onClick selection
  const getMovie = async () => {
    try{
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${clickedMovieID}?api_key=${API_KEY}`)
      setClickedMovie(res.data)
    } catch (error){
      console.error("Error fetching clicked movie details from API" , error)
    }
  }

  // call getMovie when clickedMovie is updated
  useEffect(() => {
    if (clickedMovieID) {
      getMovie()
    }
  }, [clickedMovieID])

  return (
    <main className="movieContainer">
      <h1>Search Movies</h1>
      <Searchbar className="searchbar" searchValue= {searchValue} setSearchValue={setSearchValue} />
      {/* Show selected movie details */}
      {clickedMovie && (
      <div className="clickedContainer">
        <img src={`https://image.tmdb.org/t/p/w500${clickedMovie.poster_path}`} 
          alt={clickedMovie.title} />
        <div className='rightContainer'>
        <h2>{clickedMovie.title}</h2>
        <p className="clickedInfo">Tagline: <span>{clickedMovie.tagline}</span></p>
        <p className="clickedInfo">Release date: <span>{clickedMovie.release_date}</span></p>
        <p className="clickedInfo">Overview: <span>{clickedMovie.overview}</span></p>
        <p className="clickedInfo">Average Vote: <span>{clickedMovie.vote_average}</span></p>
        </div>
      </div>
        )}
      <div className="subContainer">
        <ul className="cardContainer">
          {/*shows each movie card */}
          {movies.map( (movie) => {
            return (
              <li className="card" 
              key= {movie.id} 
              onClick= {()=>{
                //Store the data of clicked movie
                setClickedMovieID(movie.id)
              }}>
                <CardMovie movie= {movie}/>
              </li>
            )
          } )}

        </ul>
      </div>
    </main>
  )
}

export default Movie