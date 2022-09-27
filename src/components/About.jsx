import React, {useEffect, useState} from "react";
import sanityClient from "../client";
import pic2 from "/Users/nyarjijada/Desktop/Personal-Main-Projects/church/src/pics/ss2.jpg";
import  imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source){
  return builder.image(source);

}


function About() {
  const [ author, setAuthor] = useState(null);

  useEffect(() =>{
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          "bio": bio[0].children[0].text,
          "authorImage": image.asset->
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);

    }, []);

    if (!author) return <div>Loading.....</div>;

    return (
      <main className="relative">
        <img src={pic2} alt="background Pic" className="absolute w-full py-20 px-20" />
        <div className="p-10 lg:pt-48 container mx-auto relative">
          <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-10">
            <img 
              src={urlFor(author.authorImage).url()} 
              className="rounded w-32 h-32 lg:w-60 mr-8"
              alt="lokose"
            />
            <div className="text-lg flex flex-col justify-center">
              <h1 className="cursive text-6xl text-green-300 mb-4">
                Hello there! I am {" "} 
                <span className="text-green-100">
                  {author.name}
                </span>
              </h1>
              <div className="prose lg:prose-xl text-white">
                <BlockContent
                  blocks={author.bio}
                  projectId="zq00lcnz"
                  dataset="production"
                />
                <p className="text-green-200 text-lg">{author.bio}</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    );  
  }
  export default About;