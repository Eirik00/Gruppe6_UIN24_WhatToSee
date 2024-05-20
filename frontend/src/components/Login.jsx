import { MdMovieFilter } from "react-icons/md";
import { Link } from "react-router-dom";
import { fetchAllUsers, fetchUserById } from "../../sanity/services/usersServices";
import { useEffect, useState } from "react";

export default function Login(){
    const [users, setUsers] = useState(null)

    const getAllUsers = async () => {
        const data = await fetchAllUsers()
        setUsers(data)
    }

    const logInAsUser = async (userid) =>{
        localStorage.setItem("userid", userid)
    }

    useEffect(()=>{
        getAllUsers()
    }, [])

    return(
        <main>
            <h2><MdMovieFilter /> Velkommen til What-To-See <MdMovieFilter /></h2>
            <h3>Hvem skal logge inn?</h3>
            <div>
                {users?.map((user, index) => <Link onClick={() => logInAsUser(user._id)} key={index} to="home">{user.username}</Link>)}
            </div>
        </main>
    )
}