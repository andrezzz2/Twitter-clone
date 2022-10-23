import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { newUser, removeUser } from '../redux/features/userSlice';

function LoginPage() {
    
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

    function handleLogOut(){
        console.log("trying to log out");
        dispatch(removeUser());

        localStorage.clear();
    }  

    return(
        <div className='Login-page'>

            <button className='Login-page-login-button' onClick={handleLogin}>Log In</button>

            <button className='Login-page-login-button' onClick={handleLogOut}>Log Out</button>

        </div>
    );
}

export default LoginPage;