import { useEffect } from "react"
import { SlScreenDesktop, SlUser  } from "react-icons/sl"
import { Link } from "react-router-dom"


export default function Nav({user}){

    useEffect(()=>{

    },[user])

    return(
        <nav>
            <a href="#" id="home">What To See?</a>
            <ul>
            <Link to="/home"><li href="#"><SlScreenDesktop />Hva skal jeg se?</li></Link>
            <Link to="/category" ><li href="#">Bla gjennom Sjangere</li></Link>
                <li href="#"><SlUser />{user?.username}</li>
            </ul>
        </nav>
    )
}