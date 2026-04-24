import MovieCard from "../components/MovieCard"

function Home(){

    const movies=[
        {id:1,title : "Jhon wick",release_date:"2020"},
        {id:2,title : "x-men",release_date:"2022"},
        {id:3,title : "Batman",release_date:"2024"},
        
    ];
    
return <div className="home">
        <div className="movies-grid">

            {movies.map((movie)=>(
                    <MovieCard movie={movie} key={movie.id} />
            ))}

        </div>
        </div>
}

export default Home