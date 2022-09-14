import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Sermons from './components/Sermons';
import Offering from './components/Offering';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<App/>}>
              <Route path="Home" element={<Home/>}/>
                <Route path="About" element={<About/>}/>
                <Route path="Events" element={<Events/>}/>
                <Route path="Sermons" element={<Sermons/>}/>
                <Route path="Offering" element={<Offering/>}/> 
            </Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
