import "./tvShow.css";
import { useEffect, useState } from 'react';
import api from '../../data/api';
import {useParams} from 'react-router-dom'
import FeatureMovie from "../../component/Feature/FeatureMovie";
import Seasons from "./Seasons";
import Episodes from "./episodes";

function TvShow (){

const {id} = useParams()
const [item, setItem] = useState({})
const type = "tv"
          useEffect(()=>{
            let searchId = async () =>{
                let item = await api.getMovieById(id, type)                
                setItem(item)        
            }
            searchId()       
        }, [])
          
    return(
        <>
        <FeatureMovie item={item} />
        <Seasons item={item} />      
        </>
    )
}

export default TvShow;