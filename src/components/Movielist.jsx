import { useState } from "react";
import { Link } from "react-router-dom";
const Movieslist = ({movies , title}) => {
  
    return ( 
    <div>
        <h1>{title}</h1>

        <div className="movies">
                    {movies.map((movie)=>{
                        return(
                            <div className="movie">
                                <button>💖  </button>
                               <Link to={`/moviedetails/${movie.id}`}>
                                <img src={movie.poster} alt="poster" width="200px" height="250px" />
                                <h2>{movie.moviename}</h2>
                                <p>{movie.genre}</p>

                               </Link>
                            </div>
                        )
                    })}
        </div>

    </div> );
}
 
export default Movieslist;