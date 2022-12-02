import React from 'react';
import {useNavigate} from "react-router-dom";

const Login = ({toggleIsAuthenticated}) => {
    const navigate = useNavigate();
    // navigate("/blogpostOverview")

    return (
        <>
            <div className="page">
                <h1 className="head-color"> Login Pagina</h1>
                <p className="p-color"> Druk op knop om in te loggen.</p>
                <button className="button"
                        type="button"
                        onClick={()=>
                        {
                            toggleIsAuthenticated (true)
                            navigate("/")}
                        }
                >
                    Login
                </button>

            </div>
        </>
    );
};

export default Login;