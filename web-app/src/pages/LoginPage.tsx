import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { newUser, removeUser } from '../redux/features/userSlice';

function LoginPage() {
    
    const [user, setUser] = useState < null | Object > (null);
    const dispatch = useDispatch();
    
    function handleLogin(){
        console.log("trying to log in");
        dispatch(newUser({
            info: {name: "andre"},
            accessToken: "brpobmrbep"
        }));

        localStorage.setItem("x-access-token", "brpobmrbep");
        localStorage.setItem("info", JSON.stringify({name: "andre"}));
        setUser({name: "andre"});
    }   

    function handleLogOut(){
        console.log("trying to log out");
        dispatch(removeUser());

        localStorage.clear();
        setUser(null);
    }  

    return(
        <div className='Login-page'>

            <div>logged with {JSON.stringify(user)} </div>

            <button className='Login-page-login-button' onClick={handleLogin}>Log In</button>

            <button className='Login-page-login-button' onClick={handleLogOut}>Log Out</button>

        </div>
    );
}

export default LoginPage;