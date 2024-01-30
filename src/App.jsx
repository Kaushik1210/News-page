import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import NewsItems from './components/NewsItems/NewsItems'

const App = () => {
  const[news,setNews] = useState([]) 
  const[country,setCountry]=useState('in')
  const[category,setCategory]=useState('general')

  useEffect(()=>{
    async function fun() {
      const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=${ category }&lang=en&country=${country}&max=10&apikey=eef9ae0aee21cf6366d9e3b4aac4680c`);
      const data = await response.json();
      return setNews(data.articles);      
      
    }
    fun()
    
  },[country,category])
  

  

  return (
    <div>
      <Navbar setCountry={setCountry} setCategory={setCategory} />

      

      <div className="newscontainer"> 
        { news.map((elements)=> {
           return <NewsItems  title={elements.title} src={elements.image} description={elements.description} url={elements.url} date={elements.date} />
        })
      }
      </div>
      
    </div>
  )
}

export default App

