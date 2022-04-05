import React from "react";
import './featureMovie.css'

const FeatureMovie = ({item}) =>{

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for( let i in item.genres){
        genres.push(item.genres[i].name);
    }
   
    return(
       <section className="feature"
        style={{
         backgroundSize: 'cover',
         backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="feature__vertical">
                <div className="feature__horizontal">
                    <div className="feature__content">
                        <h1 className="feature__title">{item.original_name}</h1>
                        <ul className="feature__infos">
                            <li className="feature__info feature__infos--points">{item.vote_average} pontos</li>
                            <li className="feature__info feature__infos--year">{firstDate.getFullYear()}</li>
                            <li className="feature__info feature__infos--seasons">{item.number_of_seasons} season{item.number_of_seasons !==1? 's': ''}</li>
                        </ul>
                        <p className="feature__description">
                            {item.overview}
                        </p>
                        <div className="featute__buttons">
                            <a className="featute__button feature__button--watch">►Assistir</a>
                            <a className="featute__button feature__button--mylist">+Minha Lista</a>
                        </div>
                        <p className="feature__genres">Generos: <strong>{genres.join(', ')}</strong></p>
                    </div>
                </div>
            </div>            
        </section>        
    )
}
export default FeatureMovie;