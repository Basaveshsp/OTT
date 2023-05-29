import { useNavigate, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Movieslist from "./Movielist";
import Relaventmovies from "./Relaventmovies";


const Moviedetails = ({movies , title}) => {
    let {id}=useParams();
   let  [moviess ,setMoviess]=useState(null);

    let  [movie ,setMovie]=useState(null);
    let[error ,setError]=useState(null)
    let [pending ,setPending]=useState(true) 
   
    let navigate=useNavigate();
    useEffect(()=>{
        setTimeout(() => {
            fetch(" http://localhost:4000/movies/"+id)
            .then((res)=>{return  res.json()})
            .then((data)=>{
                console.log(data);
                setMovie(data);
                setPending(false)
            })
            .catch((err)=>{
                setError("404 Network issue !!! please try again later")
            setPending(false);
        })
       
   }, 3000);
   },[id])

   function DeleteMovie() {
    fetch( "http://localhost:4000/movies/"+id,
    {
        method:"DELETE"
    })
    .then(()=>{navigate("/")})

   }
  


    return ( 
        <div>
            
            {pending==true &&  <h1>Loading.......</h1>}
          
           {error &&  <h1>{error}</h1>}
           {movie && <div className="movie-details">
                        <h1 id="title">Movie Details</h1>
                        <img src={movie.poster} alt="poster" />
                        <h1>{movie.moviename}</h1>
                        <h2>Hero :{movie.hero}</h2>
                        <h2>Heroin:{movie.heroine}</h2>
                        <h2>Director:{movie.director}</h2>
                        <h2>Release:{movie.release}</h2>
                        <h2>Rating:{movie.rating}</h2>
                        <h2>Languages:{movie.languages.join(" , ")}</h2>

                        <h3>{movie.genre}</h3>
                        <iframe  width ="560" height="315" src={movie.trailer} frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share" allowFullScreen></iframe>

                        <p>{movie.synopsis}</p>
                        <button onClick={DeleteMovie}>Delete Movie</button>
                       
                    </div> }
                    <Relaventmovies  movie={movie}/>
        </div>
     );
}
 
export default Moviedetails;