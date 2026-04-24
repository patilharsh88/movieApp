import React from 'react'

function MovieCard({movie}){

    let count=0
    function onHeartClick(){
        count++;
        alert(count);
    }

    return(

        <>
            <div className='movie-title'>{movie.title}</div>

            <div> <button onClick={onHeartClick} >❤</button></div>

            <div className='movie-nam' >{movie.nam}</div>
            <div className='movie-release' >{movie.release}</div>
        </>

    )

}

export default MovieCard 