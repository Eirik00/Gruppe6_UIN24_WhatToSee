import { client, writeClient } from "../client";

export async function fetchAllCategories(){
    const data = await client.fetch(`*[_type == "categories"]{
        _id,
        categorytitle,
        "slug": categoryurl.current
    }`)
    return data
}

export async function addFavouriteCategory(userid, categoryref){
    const result = await writeClient
        .patch(userid).setIfMissing({ favcategory: [] })
        .append('favcategory', [{ _type: 'reference', _ref: categoryref, _key: categoryref+userid}])
        .commit({autoGenerateKeys: true})
        .then(() => {return "Favourite category added!"})
        .catch((err) => {return "Couldnt add to favourite: " + err.message})
    return result
}