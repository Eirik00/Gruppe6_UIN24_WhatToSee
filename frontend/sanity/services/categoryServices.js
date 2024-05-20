import { client } from "../client";

export async function fetchAllCategories(){
    const data = await client.fetch(`*[_type == "categories"]{
        _id,
        categorytitle,
        "slug": categoryurl.current
    }`)
    return data
}