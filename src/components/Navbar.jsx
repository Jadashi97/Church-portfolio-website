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
                <nav className="flex">
                    <NavLink
                        to="Home"
                        activeclassname = "text-red-100 bg-red-700"
                        className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold italic tracking-widest"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }

                    >
                        Home
                    </NavLink>

                    <NavLink 
                        to="Events"
                        activeClassName = "text-red-100 bg-red-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Events
                    </NavLink>

                    <NavLink 
                        to="About"
                        activeClassName = "text-red-100 bg-red-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        About
                    </NavLink>

                    <NavLink 
                        to="Offering"
                        activeClassName = "text-red-100 bg-red-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Offering
                    </NavLink>

                    <NavLink 
                        to="Sermons"
                        activeClassName = "text-red-100 bg-red-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Sermons
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