import { useEffect } from "react"
import { SlScreenDesktop, SlUser  } from "react-icons/sl"


export default function Nav({user}){

    useEffect(()=>{

    },[user])

    return(
            <nav>
            <a href="#" id="home">What To See?</a>
            <ul>
                <a href="#"> <SlScreenDesktop />    Hva skal jeg se?</a>
                <a href="#">    Bla gjennom Sjangere</a>
                <a href="#"><SlUser />  {user?.username}</a>
            </ul>
        </nav>
    )
}