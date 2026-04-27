import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home(){

    const[searchQuery,setSearchQuery]=useState("")
    
    const movies=[
    { id: 1, title: "Jhon wick", release_date: "2020" },
    { id: 2, title: "x-men", release_date: "2022" },
    { id: 3, title: "Batman", release_date: "2024" },
    { id: 4, title: "Avengers", release_date: "2019" },
    { id: 5, title: "Spider-Man", release_date: "2021" },
    { id: 6, title: "Iron Man", release_date: "2008" },
    { id: 7, title: "Thor", release_date: "2011" },
    { id: 8, title: "Hulk", release_date: "2008" },
    { id: 9, title: "Doctor Strange", release_date: "2016" },
    { id: 10, title: "Black Panther", release_date: "2018" }
    ];

    const handleSearch=(e)=>{
        e.preventDefault();        
    }
    
return <div className="home">

    <div className="search-form" onClick={handleSearch}>

        <form>
        <input type="text" 
        placeholder="search for movie"
        
        value={searchQuery}
        onChange={(e)=>
            setSearchQuery(e.target.value)
        }

        />

        <button type="submit"> 🔍 </button>
        </form>

    </div>
    

        <div className="movies-grid">
            {movies.map((movie)=>(
                    movie.title.toLowerCase().startsWith(searchQuery)&&(<MovieCard movie={movie} key={movie.id}/>)
                     
            ))}
        </div>
        </div>
}

export default Home