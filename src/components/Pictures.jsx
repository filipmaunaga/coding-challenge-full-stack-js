import React, { useState } from 'react'
import axios from 'axios'
import SinglePicture from './SinglePicture';

function Pictures() {

const [photos, setPhotos] = useState([]);


  axios.get("http://localhost:5000/",  { crossdomain: true }).then(response => {
       const flickrData = response.data.photos.photo;
      setPhotos(flickrData);
      });

return (
  photos.map(photo =>    
  <SinglePicture imgLink={photo.url_l} />
))
}

export default Pictures
