import { useParams } from "react-router-dom";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import { fetchMoviesByCategory } from "../../sanity/services/movieServices";
import MovieCard from "./MovieCard";

export default function CategoryPage({user}){
    const {slug} = useParams()
    const [category, setCategory] = useState(null)
    
    const getCategoryBySlug = async(slug) =>{
        const data = await fetchMoviesByCategory(slug)
        setCategory(data[0])
    }


    useEffect(()=>{
        getCategoryBySlug(slug)
        console.log(category)
    },[slug])
    return(
        <Layout user={user}>
            <main>
                <h2>Sjanger: {category?.categorytitle + "(" + category?.categorymovies.length + " filmer)"}</h2>
                <section id="movielist">
                    {category?.categorymovies.map((movie, index) =><MovieCard key={index} movie={movie} />)}
                </section>
            </main>
        </Layout>
    )
}