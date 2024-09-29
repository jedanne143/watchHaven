import React from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'

function TvSeries() {
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