import React from "react";
import ReactPlayer from "react-player"

const SPECTRUM = () => {

    return (
        <div>
            <div class = "grid-container">

                <div class = "grid-item LeftSide"> 
                    <p id="blocktext-title">SPECTRUM</p>

                    <p id="blocktext-small3">............................................................</p>

                    <p id="blocktext-small3">Neu-Candy</p>

                    <p id="blocktext-small3">Bottom of the River</p>

                    <p id="blocktext-small3">When The Party's Over</p>

                    <p id="blocktext-small3">Whipping Post</p>

                    <p id="blocktext-small3">Lost in he World</p>

                    <p id="blocktext-small3">............................................................</p>
                    
                    <div>
                        <p class="mt-3" id="blocktext-small" style={{marginTop: "40px", marginBottom: "100px"}}> In March 2019, with the help of our family and friends, we recorded our
                        first studio album! The name SPECTRUM embodies our wide range of backgrounds, perspectives,
                        and interests, and we aimed to show this through the variety of songs in the album.
                        </p>
                    </div>

                    <div class="footer">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> 
                        <a href="https://open.spotify.com/artist/7qJdYIQOTw75BsL7o9NaKh?si=Lckb9eFBSmuRFbNDEkknjA&nd=1" class="fa fa-spotify fa-3x"></a>
                        <a href="https://www.instagram.com/tdacappella/" class="fa fa-instagram fa-3x"></a>
                        <a href="https://www.youtube.com/channel/UCfMtsN-sww0t6d6wv0j983A" class="fa fa-youtube fa-3x"></a>
                        <a href="https://www.facebook.com/tdacappella" class="fa fa-facebook fa-3x"></a>
                    </div>

                </div>

                <div class = "grid-item RightSide">

                    <p id="blocktext-title">Soundcloud</p>
                    <div class = "ReactCSS" >
                    <ReactPlayer class="MusicPlayer" url="https://soundcloud.com/tonedefacappella/when-the-partys-over"/>                                                   
                    </div>


                    <p id="blocktext-small" style={{marginTop: "40px", marginBottom: "40px"}}> 
                        Each track seemlessly and artfully blends a dynamic array of genres and emotions. To us, The five compositions
                        of SPECTRUM represent the greater cause of bringing happiness to people through music, much like our own group through the years. 
                    </p>
                    <p id="blocktext-small" style={{marginTop: "40px", marginBottom: "40px"}}>
                    We hope you enjoy it as much as we do.
                    </p>
                </div>

            </div>
        </div>
    );

} 

export default SPECTRUM;