import React from "react";
import "./style.css"
import dev from "../../assets/img/pablo.jpg"

const Footer = () =>{
    return (
        <footer style={{padding: 40}}>
            <p>Criado por Pablo Teles</p>
            <p>Direito de imagem Netflix</p>
            <p className="link">Desenvolvido através da API do <a href="https://www.themoviedb.org/" target="_blank">Themoviedb.org</a></p>
            <a className="link" href="https://api.whatsapp.com/send?phone=5511991572320&text=Olá, me chamo " target="_blank">WhatsApp</a>
        </footer>
    )
}
export default Footer;