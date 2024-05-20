import { useParams } from "react-router-dom";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import { fetchUserById } from "../../sanity/services/usersServices";

export default function Compare({user}){
    const {slug} = useParams()
    const [comparedUser, setComparedUser] = useState(null)


    const getComparedUser = async ()=>{
        const data = await fetchUserById(slug)
        setComparedUser(data[0])
        console.log(data[0])
    }

    useEffect(()=>{
        getComparedUser()
    },[slug])
    return(
        <Layout user={user}>
            <main>
                <h2>Forslag for {user?.username} og {comparedUser?.username}</h2>
                <section>
                    <article>
                        <h3></h3>
                    </article>
                    <article>
                        
                    </article>
                    <article>
                        
                    </article>
                </section>
            </main>
        </Layout>
    )
}