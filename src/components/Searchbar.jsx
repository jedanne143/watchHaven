import React from 'react'

function Searchbar({searchValue , setSearchValue}) {
  return (
    <div>
        <input type="text" 
        className='searchbar'
        name="searchbar" 
        value={searchValue}
        onChange = {(event)=> setSearchValue(event.target.value)}
        placeholder="Type to search..."/>
    </div>
  )
}

export default Searchbar