import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navebar from './components/Navbar';
import Addmovie from './components/Addmovie';
import Moviedetails from './components/Moviedetails';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './components/SignUp';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navebar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Addmovie/>}/>
        <Route path='/moviedetails/:id' element={<Moviedetails />}/>
        <Route path='/su' element={<SignUp/>} ></Route>
       </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
