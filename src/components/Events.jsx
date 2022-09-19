import React, { useEffect } from "react";
import { useState } from "react";
import {Link} from  "react-router-dom";
import sanityClient from "../client.js";




function Events(){
    const [postData, setPost] = useState(null);

    useEffect(()=>{
        sanityClient
            .fetch(
                `*[_type == "post"]{
                    title,
                    slug,
                    mainImage{
                        <asset->{
                            _id,
                            url
                        },
                        alt
                    }
                }`
            )
            .then((data) => setPost(data))
            .catch(console.error);
    }, []);

    return(
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">
                    Church Events
                </h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                    Together we are stronger
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && 
                        postData.map((post, index) =>(
                            <article>
                                <Link to={"/events/"}>

                                </Link>
                            </article>
                        )

                        )

                    }
                </div>
            </section>
            
            
        </main>
    )
}
export default Events;