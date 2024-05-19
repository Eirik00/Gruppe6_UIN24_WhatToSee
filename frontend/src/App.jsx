import { useEffect, useState } from 'react'
import Layout from './components/Layout'
import Login from './components/Login'
import { Route, Routes} from 'react-router-dom'
import './css/main.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  const url = 'https://moviesdatabase.p.rapidapi.com/titles/search/title/Kingdom%20of%20Heaven?exact=true&year=2005&titleType=movie';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_APIKEY,
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  }

  const getMovie = async() =>{
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{
    getMovie()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
