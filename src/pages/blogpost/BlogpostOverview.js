import React from 'react';
import Posts from '../../data/posts.json'
import {Link, useNavigate} from "react-router-dom";

const BlogpostOverview = ({isAuthenticated, toggleIsAuthenticated}) => {
   const navigate = useNavigate();
    return (

        <div className="page">
            <h1 className= "head-color"> Blog Overzicht</h1>
            <h4 className= "head-color">Aantal blogpost: {Posts.length}</h4>

            <ul>
                { isAuthenticated ?
                    Posts.map((post) =>{
                        console.log(post.id);
                        return(
                            <li className="link-color" key={`${post.id}`}>
                                <Link to={`/blogpost/${post.id}`} className ="link-color">  {post.title}
                                </Link>
                            </li>
                        )
                    }) :
                    navigate("/")
                }
            </ul>
        </div>
    );
};

export default BlogpostOverview;