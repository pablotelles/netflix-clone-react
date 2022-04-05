import { useEffect, useState } from 'react';
import api from '../../data/api';
import "./movie.css"
import {useParams} from 'react-router-dom'

function Movie (){
    const {id} = useParams()
    const [item, setItem] = useState({})
    const type = "movie"

            useEffect(()=>{
                let searchId = async () =>{
                    let item = await api.getMovieById(id, type)                
                    setItem(item)        
                }
                searchId()       
            }, [])
    
            console.log(item)
    let firstDate = new Date(item.release_date);
    let genres = [];
    for( let i in item.genres){
        genres.push(item.genres[i].name);
    }
     
    return(
     
        <section className="movie"
        style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
            <div className='movie--container'>
                <div className='movie__content'>
                    <h2 className='movie__item movie__item--title'>{item.title}</h2>
                    <p className='movie__item movie__item--description'>{item.overview}</p>
                    <p className='movie__item movie__item--genres'>{genres.join(', ')}</p>
                    <div className='movie__infos'> 
                        <p className='movie__item movie__item--year'>{firstDate.getFullYear()}</p>
                        <p className='movie__item movie__item--rate'>{item.vote_average}</p>
                    </div>               
                </div>
            </div>
     
        </section>
    )
}

export default Movie;