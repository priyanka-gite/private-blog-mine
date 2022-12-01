import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <ul>
                <li><NavLink to="/">Home pagina</NavLink></li>
                <li><NavLink to="/login">Login pagina</NavLink></li>
                <li><NavLink to="/blogpostOverview">Blog Overzicht pagina </NavLink></li>
            </ul>
        </div>
    );
};

export default Nav;