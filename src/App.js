import React, { useState } from 'react';
import './App.css';
import  {Routes, Route} from 'react-router-dom';
import BlogpostOverview from "./pages/blogpost/BlogpostOverview";
import Blog from "./pages/blog/Blog";
import Login from "./pages/login/Login";
import Homepage from "./pages/homepage/Homepage";
import Nav from "./components/Nav/Nav";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
    <div>
        <Nav/>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/blogpostOverview" element={<BlogpostOverview/>}/>
            <Route path="/blogpost/:blogId" element={<Blog/>}/>
        </Routes>
    </div>
  );
}

export default App;
