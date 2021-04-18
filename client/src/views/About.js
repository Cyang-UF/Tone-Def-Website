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