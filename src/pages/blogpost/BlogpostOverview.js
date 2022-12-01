import React from 'react';
import Posts from '../../data/posts.json'
import {Link} from "react-router-dom";

const BlogpostOverview = () => {
    return (

        <div>
            <h1> Blog Overzicht</h1>
            <h4>Aantal blogpost: {Posts.length}</h4>

            <ul>
                {
                    Posts.map((post) =>{
                        console.log(post.id)
                        return(
                            <li key= { post.id}>
                                <Link to={"/blogpost/:" + post.id}>  {post.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default BlogpostOverview;