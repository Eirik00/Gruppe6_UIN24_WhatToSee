export default function MovieCard({movie}){
    const url = 'https://moviesdatabase.p.rapidapi.com/titles/search/title/Kingdom%20of%20Heaven?exact=true&year=2005&titleType=movie';
    const options = {
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_APIKEY,
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    }

    const getMovie = async() =>{
        try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        } catch (error) {
        console.error(error);
        }
    }
    useEffect(()=>{
        getMovie()
    }, [])
    
    return(
        <article>
            
        </article>
    )
}