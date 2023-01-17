
export default async function getMovieById(id) {
    const res = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
        {
            headers: {
                'X-API-KEY': 'c5d9f26a-e05a-4b76-94c9-83a8d451a594',
                'Content-Type': 'application/json'
            }
        }
    )
    const resData= await res.json()
    
    return resData
}
