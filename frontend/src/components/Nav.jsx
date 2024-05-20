import { useEffect } from "react"
import { SlScreenDesktop, SlUser  } from "react-icons/sl"


export default function Nav({user}){

    useEffect(()=>{

    },[user])

    return(
            <nav>
            <a href="#" id="home">What To See?</a>
            <ul>
                <li href="#"><SlScreenDesktop />Hva skal jeg se?</li>
                <li href="#">Bla gjennom Sjangere</li>
                <li href="#"><SlUser />{user?.username}</li>
            </ul>
        </nav>
    )
}