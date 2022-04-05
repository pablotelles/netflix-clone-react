import React, {useState, useEffect} from "react";
import './style.css'
import api from "../../data/api";
import FeatureMovie from "../../component/Feature/FeatureMovie";
import List from "../../component/List/List";
import loading from "../../assets/Netflix_LoadTime.gif"


const Home = () => {

    const [movieList, setMovieList] = useState ([]);
    const [feactureData, setFeactureData]  = useState() 

    useEffect(()=>{
        const loadall = async  () =>{
            //take list from api
            let list = await api.getHomeList(null);
            setMovieList(list)
            //take feature from list
            let originals = list.filter(i => i.slug == 'originals') ;
            let randomMovie = Math.floor(Math.random() * (originals[0].items.results.length -1)); 
            let featuteMovie = originals[0].items.results[randomMovie];
            let featureMovieInfo = await api.getMovieInfo(featuteMovie.id, 'tv');
            setFeactureData(featureMovieInfo)
        }
        loadall()       
    }, [])
   
    return (
          <>            
            <div>
              {feactureData &&
              <FeatureMovie item={feactureData} />
              }
            </div>
            <section className='container'>
              {movieList.map((movie, key) =>
                  <List title={movie.title} items={movie.items} type={movie.type} key={key} />    
                )      
              }
            </section>
            <div className="loading">
              {movieList.length <= 0 &&
                <img src={loading} />
              }
            </div>  
          </>
      )};

export default Home;
