import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import homePic1 from "../ss6.jpg";
import homePic2 from "../ss2.jpg";
import homePic3 from "../ss5.jpg";

export default function Home() {
   const images = [
        homePic1,
        homePic2,
        homePic3,
   ]
    

  return (
    // <main className="bg-green-100 flex items-center ">
    //     <div className=" bg-green-100 prose">
    //       <img
    //         src={homePic}
    //         alt="Monstera Leaves"
    //         className="absolute object-cover md:w-full lg:w-full rounded-md w-full h-full "
    //       />
    //     </div>
    // </main>
    <div className="home-page h-full w-full bg-green-100 min-h-screen p-12">

        <Slide className="bg-green-100 flex items-center">
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    {/* <span>Slide 1</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    {/* <span>Slide 2</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    {/* <span>Slide 3</span> */}
                </div>
            </div>
        </Slide>
    </div>

  );
}