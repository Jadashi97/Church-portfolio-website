import React from "react";
// import pic5 from "/Users/nyarjijada/Desktop/Personal-Main-Projects/church/src/pics/ss5.jpg";
import pic2 from "/Users/nyarjijada/Desktop/Personal-Main-Projects/church/src/pics/ss2.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={pic2}
        alt="Monstera Leaves"
        className="absolute object-cover  backdrop-blur-xl w-full h-full mr-8"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        {/* <h1 className="text-4xl text-blue-600 font-bold cursive leading-loose home-name">
          Rooted In Community!
        </h1> */}
      </section>
    </main>
  );
}