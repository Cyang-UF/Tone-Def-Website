import React from "react";
import Paulina from '../Images/member-paulina.jpg';
import Georgina from '../Images/member-georgina.jpg';
import Nina from '../Images/member-nina.jpg';
import AboutPic2 from '../Images/dna_group_pic.jpg';
import NoPic from '../Images/td-logo-black-circle.png'
import MemberCard from "../components/MemberCard";


class About extends React.Component{
    paulinaCard = <MemberCard title="Test Title"/>;

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

                        <div class="member-grind-container">
                            <MemberCard 
                                src={Paulina}
                                title="President - Paulina Liwanag"
                                part="Voice Part - Alto"
                                hometown="Hometown: Lake Wales, FL"
                                major="Major: Computer Science"
                                joined="Member Since: Fall 2018"
                                song='Audition Song: "If I Never See Your Face
                                Again" by Maroon 5'
                            />
                        
                        
                            <MemberCard
                                src={Georgina}
                                title="Georgina Vitola"
                                part="Voice Part - Soprano"
                                hometown="Hometown: Brooksville, FL"
                                major="Major: Marketing"
                                joined="Member Since: Fall 2019"
                                song='Audition Song: "Make You Feel My Love" by Adele'
                            />

                            <MemberCard
                                src={Nina}
                                title="Nina Cortez"
                                part="Voice Part - Soprano"
                                hometown="Hometown: Brooksville, FL"
                                major="Major: Marketing"
                                joined="Member Since: Fall 2019"
                                song='Audition Song: "Make You Feel My Love" by Adele'
                            />
                            <MemberCard
                                src={NoPic}
                                title="Alex Kim"
                                part="Voice Part - Bass"
                                hometown="Hometown: Orlando, FL"
                                major="Major: Chemistry"
                                joined="Member Since: Spring 2019"
                                song='Audition Song: "Agony" from Into the Woods'
                            />

                            <MemberCard
                                src={NoPic}
                                title="Music Director - Leo Bergmiller"
                                part="Voice Part - Tenor"
                                hometown="Hometown: Somewhere, FL"
                                major="Major: Statistics"
                                joined="Member Since: Spring 2021"
                                song='Audition Song: "Moon River" by Jacob Collier'
                            />

                            <MemberCard
                                src={NoPic}
                                title="Assistant Music Director - Luke Rouleau"
                                part="Voice Part - Tenor"
                                hometown="Hometown: Lakeland, FL"
                                major="Major: Computer Engineering"
                                joined="Member Since: Fall 2020"
                                song='Audition Song: "Best Part" by Daniel Caesar'
                            />
                            <MemberCard
                                src={NoPic}
                                title="Nicole Americano"
                                part="Voice Part - Soprano"
                                hometown="Hometown: Miami, FL"
                                major="Major: Business"
                                joined="Member Since: Spring 2021"
                                song='Audition Song: "Just the Two of Us" by Bill Withers'
                            />

                            <MemberCard
                                src={NoPic}
                                title="Aaron Ivey"
                                part="Voice Part - Tenor"
                                hometown="Hometown: Somewhere, FL"
                                major="Major: Business"
                                joined="Member Since: Spring 2021"
                                song='Audition Song: "Fly Me to the Moon" by Frank Sinatra'
                            />

                            <MemberCard
                                src={NoPic}
                                title="Avery Chard"
                                part="Voice Part - Alto"
                                hometown="Hometown: Somewhere, FL"
                                major="Major: Business"
                                joined="Member Since: Spring 2021"
                                song='Audition Song: "The Star Spangled Banner" by Francis Scott Key'
                            />

                            <MemberCard
                                src={NoPic}
                                title="Grace Marten"
                                part="Voice Part - Alto"
                                hometown="Hometown: Somewhere, FL"
                                major="Major: Aquaponics"
                                joined="Member Since: Spring 2021"
                                song='Audition Song: "Fireflies" by Owl City'
                            />


                            
						</div>
					
                    </div>
                </div>
            </div>
        );
    }
} 

export default About;