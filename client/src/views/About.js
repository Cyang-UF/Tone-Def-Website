import React from "react";
import AboutPic from '../Images/About.jpg';
import AboutPic2 from '../Images/Club.jpg';


class About extends React.Component{
    render() {
        return (
            <div>                            
                <div class = "grid-container">
                    
                    <div class = "grid-item LeftSide">                                                                                              
                        <p id="blocktext">  Our Organization </p>
                        <img src={AboutPic2} class = "img3" />;

                        <div class="footer">
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <a href="https://open.spotify.com/artist/7qJdYIQOTw75BsL7o9NaKh?si=Lckb9eFBSmuRFbNDEkknjA&nd=1" class="fa fa-spotify fa-3x"></a>
                            <a href="https://www.instagram.com/tdacappella/" class="fa fa-instagram fa-3x"></a>
                            <a href="https://www.youtube.com/channel/UCfMtsN-sww0t6d6wv0j983A" class="fa fa-youtube fa-3x"></a>
                            <a href="https://www.facebook.com/tdacappella" class="fa fa-facebook fa-3x"></a>
                        </div>
                        
                    </div>

                    <div class = "grid-item RightSide">
                        <p id="blocktext"> What We Do </p>

                        <p id="blocktext-small"> Tone Def is a student-run, service-based a cappella group at UF.
                         We here at Tone Def are determined to ReDEFine music as you hear it!
                        </p>

                        <img src={AboutPic} class = "img2" />;

                        <p id="blocktext-small">When we're not volunteering around the community, we're preparing for ICCA or hanging out with our Dance Marathon Miracle 
                        Children Ayden and Emily (past and present, respectively)! If you'd like to hear some of our work, check out our album SPECTRUM, a reflective culmination
                         of the group's diversity through the years. Other projects are in the works, so watch out for latest announcements and keep track of our activities
                          on social media (@tdacappella)!</p>


                    </div>

                </div>
            </div>
        );
    }
} 

export default About;