import React from 'react'

function Categories ({name,event}) {
 
  return (
    <>
      <li><a href="/#" onClick={event}>{name}</a></li>
    </>
  )
}

export default Categories;