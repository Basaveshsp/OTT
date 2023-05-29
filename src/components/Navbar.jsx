import { Link } from "react-router-dom";
const Navebar = () => {
    return ( 
        <nav>
            <div id="logo">
                <Link to="/"><h1>Bright 🎥  </h1></Link>
            </div>
            <div id="search-bar">
                <input type="search" placeholder="Search for movies" />
                <button>Search</button>
            </div>
            <div id="signup">
                <Link to="/su"><h1>SIGN UP</h1></Link>
                </div>
            <div id="add-movie">
                <Link to="/add">Add Movie</Link>
            </div>
        </nav>
     );
}
 
export default Navebar;