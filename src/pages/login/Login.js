import React from "react";
import './style.css'
import logo from "../../assets/Netflix-Logo.png"

const Login = () =>{


    return (
        <div className="container-login">
            <header className="login__header">
                <img className="login__logo" src={logo} alt="Logo Netflix"/>
            </header>
            <div id="caixa_login" className="col-4 offset-4">
            <h1 className="title text-white">Entrar</h1>
            <form>
                <input
                className="form-control form-control-lg"
                placeholder="Email ou número de telefone"
                type="email"/>
                <br/>
                <input
                className="form-control form-control-lg"
                placeholder="senha"
                type="password"/>
                <button className="btn-login">Entrar</button>
            </form>
            </div>



        </div>
    )
}

export default Login;