import { useEffect, useState } from "react";
import Movieslist from "./Movielist";

const Relaventmovies = ({movie}) => {
    let Genre;
    let rmovies;
let [movies,setMovies]=useState(null);
   let[error ,setError]=useState(null)
   let [pending ,setPending]=useState(true) 

    useEffect(()=>{
        setTimeout(() => {
            fetch(" http://localhost:4000/movies")
            .then((res)=>{return  res.json()})
            .then((data)=>{
                console.log(data);
                console.log(movie);
                setMovies(data);
                setPending(false)
                // Genre=  movie.genre.split(" ");
                // for (let j = 0; j < data.length; j++) {
                //     for (let i = 0; i < Genre.length; i++) 
                //         {
                //              rmovies=data[j].genre.includes(Genre[i])
                //         }
                    
                // }
            })
            .catch((err)=>{
                setError("404 Network issue !!! please try again later")
            setPending(false);
        })
            
        }, 4000);
    },[])
    return ( 
        <div className="relevent">
           {pending}
           {error && <h1>{error}</h1>}
            
           {movies && 
            <Movieslist movies={movies.filter((m)=>{return m.genre.includes(`${movie.genre}`)})} title="Relavent movies"/>}
            
            
        </div>
     );
}
 
export default Relaventmovies;