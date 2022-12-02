import React from 'react';
import {useNavigate} from "react-router-dom";

const Logout = ({toggleIsAuthenticated}) => {
    const navigate = useNavigate()
    return (
        <>
            <button className="button"
                type="button"
                onClick={()=>
                {
                    toggleIsAuthenticated (false)
                    navigate("/")}
                }
            >
                Logout
            </button>
        </>
    );
};

export default Logout;