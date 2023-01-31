
export default async function getMovieByKeyWord(keyword, page) {
    const res = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyword}&page=${page}`,
        {
            headers: {
                'X-API-KEY': 'c5d9f26a-e05a-4b76-94c9-83a8d451a594',
                'Content-Type': 'application/json'
            }
        }
    )
    const resData = await res.json()

    for (let i = 0; i < resData.films.length; i++) {

        if (resData.films[i].genres.some((e) =>e.genre.toLowerCase() === 'для взрослых')) {
             resData.films.splice(i,1)
           
        }

    }
    return resData
}
