import React from "react";
import blackIcon from "../Images/icon-black-TD-only.png";

const Audition = () => {
    return (
        <div class = "grid-container">
            
            <div class = "grid-item LeftSide"> 

                <p id="blocktext-title"style={{marginBottom: "20px"}}> How to Audition </p>

                <h1 id="blocktext-small" style={{marginTop: "30px", fontSize: "2.2rem"}}> Thank you for your interest in joining Tone Def A Cappella! </h1>

                <h2 id="blocktext-small" style={{marginTop: "50px"}}>We would like to kick off the Fall 2021 semester by announcing our 
                virtual auditions! On a TBA future date, we will be accepting audition signups through 
                the form below. Auditions will be held via Zoom in 15-minute sessions. Complete the form to receive your 
                time slot!  <a id="blocktext-small-blue" href="/Contact">Contact</a> us if you have any further questions! </h2>

                <h1 id="blocktext-small" style={{marginTop: "50px", marginBlock: "50px"}}>The audition is simple, so don’t be nervous! First, you’ll sing a verse and a chorus 
                from a song that you feel best showcases your voice. Then you’ll be asked to complete some simple technical singing 
                activities (we’ll help you if you need it!). You can also choose to complete the optional sight reading activity! 
                If you decide not to, that’s okay, too.</h1>

                <img src={blackIcon} class = "smallLogo" />

            </div>
            <div class = "grid-item RightSide">
            <p id="blocktext-title" > Audition Scheduling </p>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScyHFQ5CNDVF_7jgZ9B2Jf4KAiyz1ePzbz8MyNYp9OdS23-Xw/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
    );
}

export default Audition;
