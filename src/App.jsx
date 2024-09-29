import './App.css'
import {Routes , Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ComingSoon from './pages/ComingSoon'
import Movie from './pages/Movie'
import TvSeries from './pages/TvSeries'
import Navbar from './components/Navbar'
import FetchProvider from './components/FetchContext'



function App() {
  return (
    <>
    <Navbar />
    <FetchProvider>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/comingsoon" element={<ComingSoon/> }/>
        <Route path="/movies" element={<Movie/>} />
        <Route path="/series" element={<TvSeries/>} />
      </Routes>
    </FetchProvider>
    </>
  )
}

export default App

