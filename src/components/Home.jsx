import React from "react";
// import pic5 from "/Users/nyarjijada/Desktop/Personal-Main-Projects/church/src/pics/ss5.jpg";
import homePic from "/Users/nyarjijada/Desktop/Personal-Main-Projects/church/src/pics/home1.jpg";

export default function Home() {
  return (
    <main>
      <div className="ml-10  pt-12 pb-12 pr-12 blur-sm">
        <img
          src={homePic}
          alt="Monstera Leaves"
          className="absolute blur-sm object-cover h-full w-full"
        />
      </div>
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-4xl text-blue-600 font-bold cursive leading-loose home-name">
          Rooted In Community!
        </h1>
      </section>
    </main>
  );
}