import React from "react";
import groupPic from '../Images/td-with-ayden.jpg';
import blackIcon from "../Images/icon-black-TD-only.png";

const Donate = () => {
    return (
        <div class = "grid-container">
            
            <div class = "grid-item LeftSide"> 
                <p id="blocktext-title">  Donate </p>
                <img src={groupPic} class = "donatePic"/>
                <p id="blocktext-small">Dance Marathon Miracle Fundraising Team</p>
                
            </div>

            <div class = "grid-item RightSide">
                <img src={blackIcon} class = "smallLogo" style={{height: "10%", marginTop: "20px", marginBottom: "20px"}} />

                <div class="aboutText" style={{hmarginTop: "10px", marginBottom: "20px"}}>
                    <p>
                        If you would like to donate to our annual Dance Marathon fundraiser, we would greatly appreciate it! 
                        All proceeds go towards helping Dance Marathon Miracle Children like Ayden and Emily, whom are Tone Def's past and present Miracle Children, respectively.
                    </p>
                </div>
                <div class="donationBox">
                    <spacer></spacer>
                    <iframe class="donateLink" src="https://events.dancemarathon.com/index.cfm?fuseaction=widgets.300x250thermo&amp;teamID=48456" width="302" height="252" frameborder="1" scrolling="no">
                        <a class="donate-button" href="https://events.dancemarathon.com/index.cfm?fuseaction=donorDrive.team&teamID=48456">Make a Donation!</a>
                    </iframe>
                    <spacer></spacer>
                </div>
                <div class="footer">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <a href="https://open.spotify.com/artist/7qJdYIQOTw75BsL7o9NaKh?si=Lckb9eFBSmuRFbNDEkknjA&nd=1" class="fa fa-spotify fa-3x"></a>
                    <a href="https://www.instagram.com/tdacappella/" class="fa fa-instagram fa-3x"></a>
                    <a href="https://www.youtube.com/channel/UCfMtsN-sww0t6d6wv0j983A" class="fa fa-youtube fa-3x"></a>
                    <a href="https://www.facebook.com/tdacappella" class="fa fa-facebook fa-3x"></a>
                </div>         
            </div>

        </div>
    );
}

export default Donate;