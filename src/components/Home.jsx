import React from "react";
import pic5 from "/Users/nyarjijada/Desktop/Personal-Main-Projects/church/src/pics/ss5.jpg";

function Home(){
    return(
        <main> 
            <div class="hero container max-w-screen-lg mx-auto pb-10 mt-20 flex" >
                <img
                    src={pic5}
                    alt="home"
                    class="mx-auto"
                />
            </div>
            <section>
                <div>
                    <h2 className="text-4xl text-orange-400 font-bold cursive leading-none lg:leading-snug home-name">
                        Our Mission
                    </h2>
                </div>
                <div className="absolute indent-8 justify-around  break-words min-h-screen lg:pt-10 px-10 leading-none lg:leading-8 text-1xl pb-2">
                    <p>As a Community, we aim to glorify God by making disciples by reaching and teaching all people with the life-changing message of Jesus Christ.</p> <br />
                    <p>We believe that God's justifying grace must not be separated from His sanctifying power and purpose.</p> <br />
                    <p>God commands us to love Him supremely and others sacrificially, and to live out our faith with care for one another, 
                        compassion toward the poor and justice for the oppressed. With God's Word, the Spirit's power, and fervent prayer in Christ's name, 
                        we are to combat the spiritual forces of evil.
                    </p> <br />
                    <p>In obedience to Christ's commission, we are to make disciples among all people, always bearing witness to the gospel in word and deed. </p>              
                </div>
            </section>     
        </main>

    )
}


export default Home;