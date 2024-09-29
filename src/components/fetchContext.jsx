import React,{ createContext , useState, useEffect} from "react";
import axios from 'axios'
const API_KEY = import.meta.env.VITE_API_KEY
export const FetchContext =createContext();

const FetchProvider = ({children}) => {
  // const API_KEY = import.meta.env.VITE_API_KEY
  const [popMovies, setPopMovies] = useState([]);
  const [popSeries, setPopSeries] = useState([]);
  // Loading state while fetching data
  const [loading, setLoading] = useState(true); 
  // Fetch popular movies
  const getPopMovies = async () => {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
      setPopMovies(res.data.results);
    } catch (error) {
      console.error("Error fetching Movie data from API", error);
    }
  };
  // Fetch popular TV series
  const getPopSeries = async () => {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`);
      setPopSeries(res.data.results);
    } catch (error) {
      console.error("Error fetching TV Series data from API", error);
    }
  };
  // Fetch data on initial render 
  useEffect(() => {
    const fetchData = async () => {
      await getPopMovies();
      await getPopSeries();
      // Set loading to false when data is fetched
      setLoading(false); 
    };

    fetchData();
  }, []);

  return (
    <FetchContext.Provider value={{ popMovies, popSeries, loading }}>
      {children}
    </FetchContext.Provider>
  );
};

export default FetchProvider;

