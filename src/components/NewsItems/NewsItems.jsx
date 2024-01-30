import React from 'react'
import './newsitems.css'

const NewsItems = ({title,url,src,description,date}) => {
  return (
    <div>
      <div className='card'>      
        <img src={src} style={src?{display:'block'}:{display:'none'}} alt="" />        
      <div className='article'>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{date}</p>
        <a href={url}>Read more...</a>         
      </div>    
    </div>   
    </div>
  )
}

export default NewsItems
