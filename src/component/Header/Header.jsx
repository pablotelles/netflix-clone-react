import React, {useState, useEffect} from "react";
import './header.css';
import logo from '../../assets/Netflix-Logo.png';
import userAvata from '../../assets/Netflix-avatar.png'

const Header = () =>{
    const [blackHeader, setBlackHeader] = useState(false)
    useEffect(()=>{
      const scrollListener = () =>{
        if (window.scrollY > 10){
          setBlackHeader(true)       
         }else{
          setBlackHeader(false)  
        }      
      }
      window.addEventListener('scroll', scrollListener)
      return () =>{
        window.removeEventListener('scroll', scrollListener)
      }
    },[])
    
    return(
        <header className={blackHeader ? "Header__black" : ''}>           
            <div className="header__logo">
                <img src={logo} />       
            </div>
            <div className="header__user">
                <img src={userAvata}/>      
            </div>
        </header>
    )

}

export default Header;