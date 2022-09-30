import React from "react";
// import pic5 from "/Users/nyarjijada/Desktop/Personal-Main-Projects/church/src/pics/ss5.jpg";
import homePic from "/Users/nyarjijada/Desktop/Personal-Main-Projects/church/src/pics/ss6.jpg";

export default function Home() {
  return (
    <main className="bg-gray-100 items-center ">

      <div>
        <div className="prose">
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