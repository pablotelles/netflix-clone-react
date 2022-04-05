import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home";
import Movie from './pages/movie/Movie';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import TvShow from './pages/tvShow/TvShow';

function Routess (){

    return(        
    <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Movie />} />
                <Route path="/tv/:id" element={<TvShow />} />
            </Routes>     
    </BrowserRouter>  
    )
}
export default Routess;