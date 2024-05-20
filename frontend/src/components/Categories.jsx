import { useEffect, useState } from "react"
import Layout from "./Layout"
import { fetchAllCategories } from "../../sanity/services/categoryServices"
import { Link } from "react-router-dom"

export default function Categories({user}){
    const [categories, setCategories] = useState(null)
    
    const getCategories = async () =>{
        const data = await fetchAllCategories()
        setCategories(data.sort((a, b)=>a.categorytitle.localeCompare(b.categorytitle)))
    }

    useEffect(()=>{
        getCategories()
    },[])
    
    return(
        <Layout user={user}>
            <main>
                <h2>Sjangere</h2>
                <ul>
                    {categories?.map((category, index)=><li key={index}><Link to={"/category/"+category.slug} >{category.categorytitle}</Link></li>)}
                </ul>
            </main>
        </Layout>
    )
}