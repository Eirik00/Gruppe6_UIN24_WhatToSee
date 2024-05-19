import { client } from "../client";

export async function fetchAllUsers(){
    const data = await client.fetch(`*[_type == "users"]{
        _id,
        username
    }`)
    return data
}