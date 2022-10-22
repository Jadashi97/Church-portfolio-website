import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

function Navbar(){
    let activeStyle = {
        textDecoration: "underline",
    };


    return(
        <header className="bg-yellow-600">
            <div className="container mx-auto flex justify-between">
                    <strong className="inflex-flex items-center py-6 px-3 text-red-100 bg-red-700">
                        South Sudanese <br />
                        Community <br />
                        Church
                    </strong>

                <nav className="flex">

                    <NavLink
                        to="/"
                        exact
                        className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-200 text-2xl font-bold italic tracking-widest"

                    >
                        Home
                    </NavLink>

                    <NavLink 
                        to="Post"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Blog Posts 
                    </NavLink>

                    <NavLink 
                        to="About"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                    >
                        About
                    </NavLink>

                    <NavLink 
                        to="Offering"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                    >
                        Offering
                    </NavLink>
                    
                    <NavLink 
                        to="Project"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                    >
                        Project
                    </NavLink>


                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon
                        url="https://www.youtube.com/channel/UCYk7ahiUY2elU6RDIuu2l8g/featured"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}   
                    />
                </div>
            </div>
        </header>
    )
}


export default Navbar;