import React from 'react';
import {NavLink} from 'react-router-dom';
import Logout from "../Logout/Logout";

const Nav = ({isAuthenticated,toggleIsAuthenticated, className}) => {
    return (
        < >
            <div className="navBar">
                <section>
                    <NavLink to="/" className=" styles ">Home pagina
                    </NavLink>

                    {isAuthenticated ?
                        <NavLink to="/blogpostOverview" className=" styles">Blog Overzicht pagina
                        </NavLink>
                        :
                        <NavLink to="/login" className=" styles" >Login pagina
                        </NavLink>}

                </section>

                <section> {isAuthenticated ? <Logout toggleIsAuthenticated={toggleIsAuthenticated}/>
                    :
                    <div></div>}
                </section>
            </div>


        </>
    );
};

export default Nav;