import "./list.css";
import { FaPlayCircle } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import iconLike from "../../assets/modal/Like.png"
import iconDeslike from "../../assets/modal/deslike.png"
import iconAdd from "../../assets/modal/Add.png"
import iconPlay from "../../assets/modal/Play.png"


function Modal ({item}) {
    
    const handlerFullModal = () => {
        console.log(item)
    }

    let overview = item.overview.substring(0,100)
    console.log(item)
    return(
        <div className="modal">
            <div className="modal__icons">
                <img src={iconPlay} onClick={handlerFullModal} style={{ paddingRight: 10, width: 40}}/>
                <img src={iconAdd} onClick={handlerFullModal} style={{ paddingRight: 10, width: 40}}/>
                <img src={iconLike} onClick={handlerFullModal} style={{ paddingRight: 10, width: 40}}/>
                <img src={iconDeslike} onClick={handlerFullModal} style={{ paddingRight: 10, width: 40}}/>                                  
            </div>
            <p className="modal__title">{item.title}</p>
            <p className="modal__title">{item.original_name}</p>
            <div className="modal__content"></div>
                <div className="modal__infos">
                    <p className="modal__content--vote">{item.vote_average}</p>
                    <p className="modal__content--language">{item.original_language}</p>
                </div>
        </div>
        
    )
}

export default Modal;