import React from "react";
import giving from "../giving.jpg";


function Offering(){
    return(
        <div className="relative bg-green-100 justify-center p-10" >
        
            <div className=" bg-green-100 text-center">
                <h2 className="text-red-600 text-5xl font-bold">Giving</h2>
                <div className="lg:pt-44 container mx-auto relative">
                    <img 
                        src={giving} 
                        alt="offertory-pic"
                        className="object-center py-8 px-10 w-300px h-300px"
                    />
                </div>
                <div className="pt-10 text-2xl">
                    <strong>Everyone according to his/her purpose at heart, so let him/her give; not grudgingly, or of necessity: for God loves a cheerful giver.</strong>
                    <p>This is a working page in progress.. soon we will have links to cashapp, zelle even Bitcoin inorder to give at your convinience</p>
                    <p><strong>........COMING SOOON.....</strong></p>
                </div>
            </div>           
        </div>
    )
}

export default Offering; 