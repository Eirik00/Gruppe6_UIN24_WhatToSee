import { client } from "../client"

export async function fetchMoviesByCategory(category) {
    const data = await client.fetch(`*[_type == "categories" && categoryurl.current == $category]{
        _id,
        categorytitle,
        "categorymovies": *[_type == "movies" && references(^._id)]{
            _id,
            moviename,
            releaseyear
        }
    }`, {category})
    return data
}