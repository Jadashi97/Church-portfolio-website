import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import Offering from './components/Offering';
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
          <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="About" element={<About/>}/>
                <Route path="Post" element={<Post/>}/>
                <Route path="Offering" element={<Offering/>}/> 
                <Route path="Project" element={<Project/>}/> 
                <Route path="/Post/:slug" element={<SinglePost/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
