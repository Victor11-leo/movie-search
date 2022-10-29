import {useEffect, useState} from 'react'
import MovieCard from './MovieCard'
import SearchIcon from "./search.svg"
//dcb6ba36
const API_URL = "http://www.omdbapi.com?apikey=dcb6ba36"
const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setsearchTerm] = useState("")

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
        console.log(data)
    }

    const movie1 = {
        "Title": "Superman Returns",
        "Year": "2006",
        "imdbID": "tt0348150",
        "Type": "movie",
        //"Poster":"N/A"
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    }

    useEffect(() => {
        searchMovies("Superman")
    },[])
  return (
    <div className='"app'>
        <h1>MovieLand</h1>

        <div className="search">
            <input
                placeholder='Search for moveis'
                value = {searchTerm}
                onChange={(e) => setsearchTerm(e.target.value)}
            />
            <img
                src={SearchIcon}
                alt ="Search"
                onClick={() => searchMovies(searchTerm)}
            />
        </div>
        {
            movies?.length > 0 ?(
            <div className='container '>
                {movies.map((movie) => (
                    <MovieCard movie1={movie}/>
                ))}
             </div>
            ):(
                <div className="empty">
                    <h2> No movies found</h2>
                </div>
            )
        }

       
    </div>
  )
}

export default App