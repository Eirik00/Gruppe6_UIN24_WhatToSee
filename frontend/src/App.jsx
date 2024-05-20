import { act, useEffect, useState } from 'react'
import Layout from './components/Layout'
import Login from './components/Login'
import { Route, Routes, useNavigate} from 'react-router-dom'
import './css/main.css'
import Home from './components/Home'
import { fetchUserById } from '../sanity/services/usersServices'
import CategoryPage from './components/CategoryPage'

function App() {
  const [activeUser, setActiveUser] = useState(null)
  const navigate = useNavigate()

  const getUser = async () =>{
    const userId = localStorage.getItem("userid")
    if(!userId){
      navigate("/")
    }else{
      try{
        const user = await fetchUserById(userId)
        setActiveUser(user[0])
      }catch(error){
        console.log(error)
        navigate("/")
      }
    }
  }

  useEffect(()=>{
    getUser()
    console.log(localStorage.getItem("userid"))
  },[navigate])

  return (
      <Routes>
        <Route path="/" element={<Login /> } />
        <Route path="/home" element={<Home user={activeUser}/>} />
        <Route path="/category/:slug" element={<CategoryPage user={activeUser} />} />
      </Routes>
    )
}

export default App
