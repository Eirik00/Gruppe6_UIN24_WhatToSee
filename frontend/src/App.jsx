import { useState } from 'react'
import Layout from './components/Layout'
import Login from './components/Login'
import { Route, Routes} from 'react-router-dom'
import './css/main.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
