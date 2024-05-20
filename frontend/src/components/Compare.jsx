import { Link, useParams } from "react-router-dom";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import { fetchUserById } from "../../sanity/services/usersServices";
import MovieCard from "./MovieCard";

export default function Compare({user}){
    const {slug} = useParams()
    const [comparedUser, setComparedUser] = useState(null)
    const [wishlist, setWishList] = useState([])
    const [favlist, setFavList] = useState([])
    const [favCat, setFavCat] = useState([])
    const [favWishlist, setFavWishlist] = useState([])

    const getComparedUser = async ()=>{
        const data = await fetchUserById(slug)
        setComparedUser(data[0])
        setLists()
    }
    const setLists = () =>{
        setWishList(user?.wishlist?.filter(a => comparedUser?.wishlist?.some(b => a._id === b._id)))
        setFavList(user?.favmovie?.filter(a => comparedUser?.favmovie?.some(b => a._id === b._id)))
        setFavCat(user?.favcategory?.filter(a => comparedUser?.favcategory?.some(b => a._id === b._id)))
        const array1 = user?.wishlist?.filter(a => comparedUser?.favmovie?.some(b => a._id === b._id))
        const array2 = user?.favmovie?.filter(a => comparedUser?.wishlist?.some(b => a._id === b._id))
        setFavWishlist(array1.concat(array2))
    }

    useEffect(()=>{
        getComparedUser()
    },[user, comparedUser])
    return(
        <Layout user={user}>
            <main>
                <h2>Forslag for {user?.username} og {comparedUser?.username}</h2>
                <section id="comparePage">
                    <article>
                        <h3>Catch up!</h3>
                        <p>Dere har {wishlist?.length} filmer felles i ønskelisten deres.</p>
                        <section>
                            {wishlist?.map((movie, index) => <MovieCard key={index} movie={movie} />)}
                        </section>
                    </article>
                    <article>
                        <h3>Go safe!</h3>
                        <p>Dere har {favlist?.length} film felles i favorittlisten deres.</p>
                        <section>
                            {favlist?.map((movie, index) => <MovieCard key={index} movie={movie} />)}
                        </section>
                    </article>
                    <article>
                        <h3>Utforsk!</h3>
                        <p>Dere begge liker disse sjangerne, sjekk hvilke filmer som finnes å velge mellom:</p>
                        <ul>
                            {favCat?.map((category, index) => <li><Link key={index} to={"/category/"+category.slug}>{category.categorytitle}</Link></li>)}
                        </ul>
                    </article>
                </section>
                <article>
                    <h3>Ønskelister og Favoritter</h3>
                    <p>Dere har noen filmer som er på ønskelisten til en av dere og favorittlisten til den andre! Kanskje kan en av dere få innføre den andre i en ny filmopplevelse...?!</p>
                    <section>
                        {favWishlist?.map((movie, index) => <MovieCard key={index} movie={movie} />)}
                    </section>
                </article>
            </main>
        </Layout>
    )
}