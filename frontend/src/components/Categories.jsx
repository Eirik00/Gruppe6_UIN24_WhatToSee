import { useEffect, useState } from "react"
import Layout from "./Layout"
import { addFavouriteCategory, fetchAllCategories } from "../../sanity/services/categoryServices"
import { Link } from "react-router-dom"
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { MdOutlineCategory } from "react-icons/md";

export default function Categories({user}){
    const [categories, setCategories] = useState(null)

    
    const leggTilFavorit = async (catRef) => {
        const result = await addFavouriteCategory(user._id, catRef)
        if(result == "Success") {
            location.reload()
        }else{
            console.log(result)
        }
    }

    const getCategories = async () =>{
        const data = await fetchAllCategories()
        setCategories(data.sort((a, b)=>a.categorytitle.localeCompare(b.categorytitle)))
    }

    useEffect(()=>{
        getCategories()
    },[user])
    
    return(
        <Layout user={user}>
            <main id="categories">
                <h2><MdOutlineCategory />   Sjangere    <MdOutlineCategory /></h2>
                <ul>
                    {
                        categories?.map((category, index)=><li key={index}><Link to={"/category/"+category.slug} >{category.categorytitle}</Link>
                        {user?.favcategory?.some(e => e.slug === category.slug) ? <button onClick={() => leggTilFavorit(category._id)}><IoIosStar />Fjern fra favorittliste</button> : <button onClick={() => leggTilFavorit(category._id)}><IoIosStarOutline  />  Legg til i favorittliste</button>}</li>)
                    }
                </ul>
            </main>
        </Layout>
    )
} 