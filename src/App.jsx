import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import NewsItems from './components/NewsItems/NewsItems'

const App = () => {
  const[news,setNews] = useState([]) 
  const[country,setCountry]=useState('in')
  const[category,setCategory]=useState('general')

  useEffect(()=>{
    const fun=()=> {
     let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=14309cb230c0486cbad733fbe7f08401 `
     fetch(url).then(response=>response.json()).then(data=>setNews(data.articles))
   }
     fun()
     
   },[country][category])
  

  

  return (
    <div>
      <Navbar setCountry={setCountry} setCategory={setCategory} />

      

      <div className="newscontainer"> 
        { news.map((elements)=> {
           return <NewsItems  title={elements.title} src={elements.urlToImage} description={elements.description} url={elements.url} date={elements.date} />
        })
      }
      </div>
      
    </div>
  )
}

export default App

