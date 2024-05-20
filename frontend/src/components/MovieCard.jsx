import { useEffect, useState } from "react";

export default function MovieCard({movie}){
    const [movieInfo, setMovieInfo] = useState(null)
    const url = 'https://moviesdatabase.p.rapidapi.com/titles/search/title/'+movie.moviename+'?exact=true&year='+movie.releaseyear+'&titleType=movie';
    const options = {
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_APIKEY,
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    }

    const getMovie = async() =>{
        try {
        const response = await fetch(url, options);
        const result = await response.json();
        setMovieInfo(result.results[0]);
        console.log(movieInfo)
        } catch (error) {
        console.error(error);
        }
    }
    useEffect(()=>{
        getMovie()
    }, [movie])
    
    return(
        <article>
            <a href={"https://imdb.com/title/"+movieInfo?.id}><img src={movieInfo?.primaryImage.url}></img></a>
            <p>{movie.moviename}</p>
        </article>
    )
}