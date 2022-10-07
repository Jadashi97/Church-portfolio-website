import React from "react";
import homePic from "../ss6.jpg";

export default function Home() {
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
    <div className="relative w-[600px] mx-auto">
      <div className="slide relative" >
        <img
          src={homePic}
          alt="Monstera Leaves"
          className="w-full h-[300px] object-cover"
        />
        <div class="absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white">Pic One Caption</div>
      </div>
      <div className="slide relative" >
        <img
          src={homePic}
          alt="Monstera Leaves"
          className="w-full h-[300px] object-cover"
        />
        <div class="absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white">Pic One Caption</div>
      </div>
      <div className="slide relative" >
        <img
          src={homePic}
          alt="Monstera Leaves"
          className="w-full h-[300px] object-cover"
        />
        <div class="absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white">Pic One Caption</div>
      </div>

      {/* {<a class="absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
            onclick="moveSlide(-1)">❮</a>}

        {<a class="absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
            onclick="moveSlide(1)">❯</a>} */}
    </div>
  );
}