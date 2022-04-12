import React from 'react'
import Pictures from './Pictures'

function SinglePicture({imgLink}) {
  return (
    <div className='photoContainer'>
      <img src={imgLink} />
    </div>
  )
}

export default SinglePicture
