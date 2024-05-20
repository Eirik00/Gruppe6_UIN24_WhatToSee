import { useEffect, useState } from "react"
import { fetchMoviesByCategory } from "../../sanity/services/movieServices"
import { FaStar, FaSmile } from "react-icons/fa";
import Layout from "./Layout"
import { fetchUserExcept } from "../../sanity/services/usersServices";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function Home({user}){
    const [movies, setMovies] = useState(null)
    const [users, setUsers] = useState([])
    const getAllMovies = async () =>{
        const data = await fetchMoviesByCategory("fantasy")
        setMovies(data[0])
    }

    const getUserExcept = async () =>{
        const data = await fetchUserExcept(user._id)
        setUsers(data)
    }

    useEffect(()=>{
        getAllMovies()
        getUserExcept()
    },[user])

    return(
        <Layout user={user}>
            <main>
                <h2>Hei, {user?.username}</h2>
                <section id="homepage">
                    <article id="wishlist">
                        <h3><FaStar />Filmer jeg skal se!</h3>
                        <p>Disse filmene ligger i ønskelisten din:</p>
                        <section>
                            {user?.wishlist?.map((movie, index) => <MovieCard key={index} movie={movie}/> )}
                        </section>
                    </article>
                    <article id="userlist">
                        <h3><FaSmile />Jeg skal se sammen med...</h3>
                        <ul>x
                            {users?.map((user, index) => <li key={index}><Link to={"/compare/"+ user._id}>{user.username}</Link></li>)}
                        </ul>
                    </article>
                </section>
            </main>
        </Layout>
    )
}