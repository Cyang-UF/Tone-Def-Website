import React from "react";
import Paulina from '../Images/member-paulina.jpg';
import AboutPic2 from '../Images/dna_group_pic.jpg';


class About extends React.Component{
    render() {
        return (
            <div>                            
                <div class = "grid-container">
                    
                    <div class = "grid-item LeftSide">                                                                                              
                        <p id="blocktext">  Our Organization </p>
                        <p id="blocktext-small">When we are not rehearsing, we are volunteering in our local community or hanging out with our Dance Marathon Miracle 
                        Children Ayden and Emily (past and present, respectively)!</p>
                        <img src={AboutPic2} class = "img3" />
                        <p id="blocktext-small">As individuals whom have been so positively impacted by music in our lives,
                        we understand the increbile power that music has to bring people together. This is why service is a cornerstone of our organization.</p>

                        <div class="footer">
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <a href="https://open.spotify.com/artist/7qJdYIQOTw75BsL7o9NaKh?si=Lckb9eFBSmuRFbNDEkknjA&nd=1" class="fa fa-spotify fa-3x"></a>
                            <a href="https://www.instagram.com/tdacappella/" class="fa fa-instagram fa-3x"></a>
                            <a href="https://www.youtube.com/channel/UCfMtsN-sww0t6d6wv0j983A" class="fa fa-youtube fa-3x"></a>
                            <a href="https://www.facebook.com/tdacappella" class="fa fa-facebook fa-3x"></a>
                        </div>
                        
                    </div>

                    <div class = "grid-item RightSide">
                        <p id="blocktext"> Current Members </p>

                        <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div class="card" style={{borderRadius: "1rem"}}>
                                <img src={Paulina} class = "cardImg" />

                                <div class="card-body">
                                    <div class="card-text">
                                        <div class="member-bold">
                                            President - Paulina Liwanag
                                        </div>
                                        <div class="member-bold">Voice Part - Alto</div>
                                        <div class="member-info">
                                            <p>Hometown: Lake Wales, FL</p>
                                            <p>Major: Computer Science</p>
                                            <p>Member Since: Fall 2018</p>
                                            <p>
                                                Audition Song: "If I Never See Your Face
                                                Again" by Maroon 5
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
			


                    </div>

                </div>
            </div>
        );
    }
} 

export default About;