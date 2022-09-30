import React from "react";
import homePic from "/Users/nyarjijada/Desktop/Personal-Main-Projects/church-website/src/ss6.jpg";

export default function Home() {
  return (
    <main className="bg-green-100 items-center ">

      <div>
        <div className=" bg-green-100 prose">
          <img
            src={homePic}
            alt="Monstera Leaves"
            className="absolute object-cover w-full h-full "
          />
        </div>
      </div>
    </main>
  );
}