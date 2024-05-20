import { client } from "../client";

export async function fetchAllUsers(){
    const data = await client.fetch(`*[_type == "users"]{
        _id,
        username,
        favcategory[]->{
            _id,
            categorytitle,
            "slug": categoryurl.current
        },
        wishlist[]->{
            _id,
            moviename,
            releaseyear
        },favmovie[]->{
            _id,
            moviename,
            releaseyear
        }
    }`)
    return data
}

export async function fetchUserById(id){
    const data = await client.fetch(`*[_type == "users" && _id == $id]{
        _id,
        username,
        favcategory[]->{
            _id,
            categorytitle,
            "slug": categoryurl.current
        },
        wishlist[]->{
            _id,
            moviename,
            releaseyear
        },favmovie[]->{
            _id,
            moviename,
            releaseyear
        }
    }`, {id})
    return data
}
export async function fetchUserExcept(id){
    const data = await client.fetch(`*[_type == "users" && _id != $id]{
        _id,
        username,
        favcategory[]->{
            _id,
            categorytitle,
            "slug": categoryurl.current
        },
        wishlist[]->{
            _id,
            moviename,
            releaseyear
        },favmovie[]->{
            _id,
            moviename,
            releaseyear
        }
    }`, {id})
    return data
}