import { useEffect, useState } from "react"
import { fetchMoviesByCategory } from "../../sanity/services/movieServices"

export default function Home(){
    const [movies, setMovies] = useState(null)
    const getAllMovies = async () =>{
        const data = await fetchMoviesByCategory("fantasy")
        setMovies(data[0])
    }

    useEffect(()=>{
        getAllMovies()
        console.log(movies.categoryMovies)
    },[])

    return(
        <main>
            <h2>Velkommen til What-To-See</h2>

        </main>
    )
}