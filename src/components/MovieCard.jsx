import "../CSS/MovieCard.css"
// import { useMovieContext } from "../contexts/MovieContext"

function MovieCard({movie}) {
    
   
    return <div className="movie-card">
        <div className="movie-poster">
                 
            <div className="movie-overlay">
                <button className="favorite-btn"  >
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
}

export default MovieCard