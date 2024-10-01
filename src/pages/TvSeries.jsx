
import React,{useState, useEffect} from 'react'
import axios from 'axios'
const API_KEY = import.meta.env.VITE_API_KEY
import CardTV from '../components/CardTV'
import Searchbar from '../components/Searchbar'
import "./TvSeries.css"

function TvSeries() {
  const [series, setSeries] = useState([])
  const [searchValue , setSearchValue] = useState('')
  const [clickedSeries, setClickedSeries] =useState(null)
  const [clickedID, setClickedID] = useState(null)
  //to search TV series based on user input
  const searchSeries = async (searchValue) => {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${searchValue}&api_key=${API_KEY}`);
      //get results of fetch API and store it to series only if there's data
      if(res.data.results){
       setSeries(res.data.results);
      }
    } catch (error) {
      console.error("Error fetching Series results from API", error);
    }
  };

  //will call searchSeries when the page loads and when there's a new searchValue
  useEffect( () => {
    if (searchValue) {
      searchSeries(searchValue);
      setClickedSeries(null);
      setClickedID(null);
    } else {
      // Clear series if searchValue is empty
      setSeries([]); 
    }
  }, [searchValue]);

  //to get a TV series based on user onClick selection
  const getSeries = async () => {
    try{
      const res = await axios.get(`https://api.themoviedb.org/3/tv/${clickedID}?api_key=${API_KEY}`)
      setClickedSeries(res.data)
    } catch (error){
      console.error("Error fetching clicked TV series details from API" , error)
    }
  }

  // call getMovie when clickedMovie is updated
  useEffect(() => {
    if (clickedID) {
      getSeries()
    }
  }, [clickedID])

  return (
    <main className="seriesContainer">
      <h1>Search TV Series</h1>
      <Searchbar className="searchbar" searchValue= {searchValue} setSearchValue={setSearchValue} />
      <div className="subContainer">
        {/* Show selected series details */}
        {clickedSeries && (
          <div className="clickedInfo">
            <img src={`https://image.tmdb.org/t/p/w500${clickedSeries.poster_path}`} 
              alt={clickedSeries.title} />
            <div className='right'>
            <h2>{clickedSeries.name}</h2>
            <p>Tagline: <span>{clickedSeries.tagline}</span></p>
            <p>Number of Seasons: <span>{clickedSeries.number_of_seasons}</span></p>
            <p>Number of Episodes: <span>{clickedSeries.number_of_episodes}</span></p>
            <p>Overview: <span>{clickedSeries.overview}</span></p>
            <p>Country: <span>{clickedSeries.origin_country} </span></p>
            <p>Average Vote: <span>{clickedSeries.vote_average}</span></p>
            </div>
          </div>
        )}

        <ul className="cardContainer">
          {/*shows each series card */}
          {series.map( (tv) => {
            return (
              <li className="card" 
              key= {tv.id} 
              onClick= {()=>{
                //Store the data of clicked series
                setClickedID(tv.id)
              }}>
                <CardTV series= {tv}/>
              </li>
            )
          } )}

        </ul>
      </div>
    </main>
  )
}

export default TvSeries
