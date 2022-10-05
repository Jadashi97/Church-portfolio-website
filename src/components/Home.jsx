import React from "react";
import homePic from "../ss6.jpg";

export default function Home() {
  return (
    <main className="bg-green-100 flex items-center ">
        <div className=" bg-green-100 prose">
          <img
            src={homePic}
            alt="Monstera Leaves"
            className="absolute object-cover rounded-md w-full h-full "
          />
        </div>
    </main>
  );
}