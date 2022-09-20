import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import Sermons from './components/Sermons';
import Offering from './components/Offering';
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
          <Routes>
                <Route path="Home" element={<Home/>}/>
                <Route path="About" element={<About/>}/>
                <Route path="Events" element={<Post/>}/>
                <Route path="Sermons" element={<Sermons/>}/>
                <Route path="Offering" element={<Offering/>}/> 
          </Routes>
    </BrowserRouter>
  );
}

export default App;
