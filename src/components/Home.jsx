import React from "react";
import pic5 from "/Users/nyarjijada/Desktop/Personal-Main-Projects/church/src/pics/ss5.jpg";

function Home(){
    return(
        <main > 
            <div className="bg-cyan-300 p-10 m-10">
                <img
                    src={pic5}
                    alt="home"
                    className="object-scale-down "
                />
            </div>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-30 px-8">
                <h2 className="text-1.0xl text-orange-400 font-bold cursive leading-none lg:leading-snug home-name">
                    Our Mission
                </h2>
                <div className="flex">
                    <p>As a Community, we aim to glorify God by making disciples by reaching and teaching all people with the life-changing message of Jesus Christ.</p>
                    <p>We believe that God's justifying grace must not be separated from His sanctifying power and purpose.</p>
                    <p>God commands us to love Him supremely and others sacrificially, and to live out our faith with care for one another, 
                        compassion toward the poor and justice for the oppressed. With God's Word, the Spirit's power, and fervent prayer in Christ's name, 
                        we are to combat the spiritual forces of evil.
                    </p>
                    <p>In obedience to Christ's commission, we are to make disciples among all people, always bearing witness to the gospel in word and deed. </p>              
                </div>
            </section>     
        </main>

    )
}


export default Home;