import React, { useEffect, useState } from "react";
import "./episodes.css"
import imageDefaout from "../../assets/imgNotFound.png"

const API_KAY = '2d3c8345a65eab1e9218b49de83a9dcd';


function Episodes ({season, id}){

let [episodes, setEpisodes] = useState([])
const axios = require('axios');

console.log(season)
useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/tv/${id}/season/${season}?api_key=${API_KAY}&language=pt-BR&append_to_response=videos,images`)
    .then(function (response) {
        setEpisodes(response.data.episodes)
    })
    .catch(function (error) {
    console.error(error);
    }) 
}, [])

    return(
        <div className="episodes__container">
            {episodes.map((ep, index) =>(
                <div className="episode">
                    <div className="episode__box">
                        <img className="episode__banner" src={ep.still_path ? `https://image.tmdb.org/t/p/w300${ep.still_path}` : imageDefaout}alt="capa da temporada" />
                        <div className="episode__content" >
                            <p className="episode__content--title">{ep.name ? index + 1 : "Title not found"}: {ep.name}</p>
                            <p className="episode__content--description">{ep.overview ? ep.overview : "Description not found"}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
    )
}

export default Episodes;