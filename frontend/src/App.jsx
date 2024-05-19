import { useState } from 'react'
import Layout from './components/Layout'
import Login from './components/Login'
import { Route, Routes} from 'react-router-dom'
import './css/main.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}

export default App
