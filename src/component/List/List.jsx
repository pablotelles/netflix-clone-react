import React, { useEffect, useState } from "react";
import "./list.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Modal from "./Modal";
import {useNavigate} from "react-router-dom"
import imageNotFound from "../../assets/imgNotFound.png"

const List = ({ title, items, type }) => {const [scrollx, setScrollX] = useState(-200);
    
    const navigate = useNavigate()

    const handleRigthArrow = () => {
        let x = scrollx - Math.round(window.innerWidth / 2);
        let w = items.results.length * 250;
        if (window.innerWidth - w > x) {
        x = window.innerWidth - w - 60;
        }
        setScrollX(x);
    };
    const handleLeftArrow = () => {
        let x = scrollx + Math.round(window.innerWidth / 2);
        if (x > 0) {
        x = 0;
        }
        setScrollX(x);
    };
    
    function hendlerOpenMovie (item){
         navigate(`/movie/${item.id}`)
    }
    function hendlerOpenTv (item){
        navigate(`/tv/${item.id}`)
   }
    console.log(items)
    return (
        
        <>
            <section className="container__list">
                <h2 className="list__title">{title}</h2>
                <div className="list__icon list__icon--left" onClick={handleLeftArrow}>
                    <IoIosArrowBack size={30} />
                </div>
                <div className="list__icon list__icon--right" onClick={handleRigthArrow}>
                    <IoIosArrowForward size={30} />
                </div>
                <div className="list__items">
                    <div className="list__movie" style={{marginLeft: scrollx,width: items.results.length * 250,}}>
                        {items.results.map((item, key) => {

                            return (
                                <>
                                {type == "tv" ?                                    
                                    <div className="list__movie--content" key={key}>
                                        <img src={item.backdrop_path ? `https://image.tmdb.org/t/p/w300${item.backdrop_path}` : imageNotFound} onClick={() => hendlerOpenTv(item)} />
                                        <Modal item={item}/>                  
                                    </div>
                                    :
                                    <div className="list__movie--content" key={key}>                                 
                                        <img src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`} onClick={() => hendlerOpenMovie(item)} />
                                        <Modal item={item}/>                  
                                    </div>                                 
                                }                            
                                </>                  
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};
export default List;
