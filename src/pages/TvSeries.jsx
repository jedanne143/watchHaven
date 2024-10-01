import React from 'react'


function TvSeries() {

  //searchq https://api.themoviedb.org/3/search/tv?api_key=8dc239e09d89d73a1982cfdc4059b67d&query=lost
  const navigate = useNavigate()
  const handledirect = () => {
    navigate('/movies')
  }
  return (
    <div>TvSeries
      <button onClick={handledirect}>Redirect</button>
    </div>
  )
}

export default TvSeries