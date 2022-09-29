import React from "react";
// import pic5 from "/Users/nyarjijada/Desktop/Personal-Main-Projects/church/src/pics/ss5.jpg";
import homePic from "/Users/nyarjijada/Desktop/Personal-Main-Projects/church/src/pics/ss6.jpg";

export default function Home() {
  return (
    <main className="bg-gray-100">

      <div>
        <div className=" justify-items-center">
          <img
            src={homePic}
            alt="Monstera Leaves"
            className="w-200px h-200px ml-40 pt-10"
          />
        </div>
      </div>
      {/* <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-4xl text-orange-600 font-bold cursive leading-loose home-name">
          Rooted In Community!
        </h1>
      </section> */}
    </main>
  );
}