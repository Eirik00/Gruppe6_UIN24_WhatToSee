import { client } from "../client";

export async function fetchAllUsers(){
    const data = await client.fetch(`*[_type == "users"]{
        _id,
        username
    }`)
    return data
}

export async function fetchUserById(id){
    const data = await client.fetch(`*[_type == "users" && _id == $id]{
        _id,
        username
    }`, {id})
    return data
}
export async function fetchUserExcept(id){
    const data = await client.fetch(`*[_type == "users" && _id != $id]{
        _id,
        username
    }`, {id})
    return data
}