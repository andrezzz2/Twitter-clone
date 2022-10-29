import {FaTwitter,FaGoogle, FaApple} from 'react-icons/fa';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newUser } from '../redux/features/userSlice';


function Login () {

    const dispatch = useDispatch();

    function handleLogin(){
        console.log("trying to log in");

        dispatch(newUser({
            info: {name: "andre"},
            accessToken: "brpobmrbep"
        }));

        localStorage.setItem("x-access-token", "brpobmrbep");
        localStorage.setItem("info", JSON.stringify({name: "andre"}));
    }   

    return (
        <div className="Login">
            <FaTwitter fill="rgb(29, 155, 240)" className="Login-twitter-icon Icon-large"/>
            
            <div className='Login-container'>

                <span className='Login-container-title Span-bold-large'>Entrar no Twitter</span>
                <div className='btn-primary Btn-login-subscribe-with-google'>
                    <FaGoogle className="Icon-small"/>
                    <span className='Span-medium-smaller'>Fazer login com o Google</span>
                </div>
                <div className='btn-primary btn-themed-white-black Btn-login-subscribe-with-apple'>
                    <FaApple className="Icon-small"/>
                    <span className='Span-medium-small'>Entrar com Apple</span>
                </div>
                <div className='Span-lines-around'>
                    <span className='Span-lines-around-line'></span>
                    <span>or</span>
                    <span className='Span-lines-around-line'></span>
                </div>
                <div className='Input-animated'>
                    <input className='Input-primary'/>
                    <span>Celular, e-mail ou nome de usuário</span>
                </div>
                <button className='btn-primary btn-themed-black-white Btn-avancar' onClick={handleLogin}>Avançar</button>
                <button className='btn-primary btn-themed-white-black Btn-esqueceu-a-senha'>Esqueceu a senha?</button>
            </div>

            <span className='Span-subscribe'>Não tem uma conta? <a href="/">Inscreva-se</a></span>
            
        </div>
    );
}

export default Login;