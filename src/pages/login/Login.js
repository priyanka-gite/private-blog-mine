import React from 'react';
import {useNavigate} from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();

    function handleLogin (){
        console.log("Navigating to BlogpostOverview")
        navigate("/blogpost")
    }

    return (
        <div>
            <button type="button" onClick={()=>{handleLogin()
            }}>  Login
            </button>
        </div>
    );
};

export default Login;