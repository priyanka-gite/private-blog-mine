import React from 'react';
import Posts from '../../data/posts.json'
import {Link, useParams} from "react-router-dom";


const Blog = () => {
    // console.log(Posts)

    const { blogId } = useParams();
    // const content = Posts.filter((post) =>{
    //     return  post.id === blogId
    // }).map((post)=>{
    //     return post.content
    // })
    // const content = Posts[blogId-1].content
    return (
        <>
            <div className="blogs-content">
            <div className="blog-title"> { `${Posts[blogId-1].title}`}</div>
            <br/>
            <div > { `${Posts[blogId - 1].date}`} </div>
            <br/>
            <div > { `${Posts[blogId-1].content}`} </div>
            </div>
            <br/>
          <div className="page"><Link to= "/"> Terug naar homepagina</Link></div>
        </>
    );
};

export default Blog;