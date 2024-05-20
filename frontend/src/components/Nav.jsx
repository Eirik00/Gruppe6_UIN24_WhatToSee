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
                <li href="#"><Link to="/home"><SlScreenDesktop />Hva skal jeg se?</Link></li>
                <li href="#"><Link to="/category" >Bla gjennom Sjangere</Link></li>
                <li href="#"><SlUser />{user?.username}</li>
            </ul>
        </nav>
    )
}