import React from "react";
import groupPic from '../Images/td-with-ayden.jpeg';


class Donate extends React.Component{

    render() {
        return (
            <div>
               
                
                <div class = "grid-container">
                    
                    <div class = "grid-item LeftSide"> 
                    <p id="blocktext">  Donate </p>
                        <img class="donatePic" src={groupPic}  />
                    </div>

                    <div class = "grid-item RightSide">
                        <div class="aboutText">
                            <p>
                                When we're not volunteering around the community, we're preparing for ICCA or hanging out with our Dance Marathon Miracle Children Ayden and Emily (past and present, respectively)! If you'd like to hear some of our work, check out our album SPECTRUM, a reflective culmination of the group's diversity through the years. Other projects are in the works, so watch out for latest announcements and keep track of our activities on social media (@tdacappella)!
                            </p>
                        </div>
                        <div class="donationBox">
                            <spacer></spacer>
                            <iframe class="donateLink" src="https://events.dancemarathon.com/index.cfm?fuseaction=widgets.300x250thermo&amp;teamID=48456" width="302" height="252" frameborder="1" scrolling="no">
                                <a class="donate-button" href="https://events.dancemarathon.com/index.cfm?fuseaction=donorDrive.team&teamID=48456">Make a Donation!</a>
                            </iframe>
                            <spacer></spacer>
                        </div>
                        
                                 

                    </div>

                </div>
            </div>
        );
    }
}

export default Donate;