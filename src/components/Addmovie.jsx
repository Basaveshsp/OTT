import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Addmovie = () => {
    let navigate=useNavigate()
    let movieName=useRef();
    let heroName=useRef();
    let heroinName=useRef();
    let directorName=useRef();
    let genree=useRef();
    let yor=useRef();
    let ratings=useRef();
    let trailerLink=useRef();
    let posterLink=useRef();
    let synopsisText=useRef();
   
    function submitForm(e) {
        e.preventDefault()
       
        let newMovie={
            "moviename":movieName.current.value,
            "heroname":heroName.current.value,
            "heroinname":heroinName.current.value,
            "director":directorName.current.value,
           
            "genre":genree.current.value,
            "release":yor.current.value,
            "rating":ratings.current.value,
            "trailer":trailerLink.current.value,
            "poster":posterLink.current.value,
            "synopsis   ":synopsisText.current.value
        }
         
        console.log(newMovie);
        
        
        
       
        fetch("http://localhost:4000/movies",
        {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify (newMovie)
        }
        )
        .then(()=>{
            alert("New movie added")
            navigate("/")
        })
    }
    
    return ( 
        <div className="add-movie">
            <h1>Add Movie</h1>
            <form onSubmit={submitForm}>
            <div>
            
            <span>Movie Name </span>   <input type="text" placeholder=" Movie name" ref={movieName}/>
            <span>Hero Name</span>  <input type="text" placeholder=" Hero name" ref={heroName}/> 
            <span>Heroin Name</span>  <input type="text" placeholder=" Heroin name" ref={heroinName}/> 

            <span>Director</span>  <input type="text" placeholder=" Director name" ref={directorName} /> 
            <fieldset>
                <legend>Select Languages</legend>
                <input type="checkbox" name="la" id="" value="kannada"  /><label htmlFor="">Kannada</label>
                <input type="checkbox" name="la" id="" value="telugu" /><label htmlFor="">Telugu</label>
                <input type="checkbox" name="la" id="" value="hindi"  /><label htmlFor="">Hindi</label>
                <input type="checkbox" name="la" id="" value="tamil" /><label htmlFor="">Tamil</label>
                <input type="checkbox" name="la" id="" value="marathi" /><label htmlFor="">Marathi</label>

            </fieldset>
            <span>Genre</span>  <input type="text" placeholder=" Genre" ref={genree}/> 
            <span>Release</span>  <input type="number"  min="1950" max="2024" placeholder=" Release year" ref={yor} /> 
            <span>Rating</span>  <input type="number" step="0.1" min="1" max="9" placeholder=" Rating" ref={ratings}/> 
            <span>Trailer</span> <input type="url" name="" id="" ref={trailerLink} />
            <span>Poster</span> <input type="url" name="" id="" ref={posterLink} />
            <h3>Synopsis</h3>
            <textarea  id="" cols="80" rows="10" ref={synopsisText}></textarea>
            <button>Add Movie</button>
            </div>
 
            </form>
        </div>
     );
}
 
export default Addmovie;