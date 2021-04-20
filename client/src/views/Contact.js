import React from "react";

const Contact = () => {
    return (
        <div class = "grid-container">
            <div class = "grid-item LeftSide"> 
            <p id="blocktext-title"> Bookings </p>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfsGFGEaPADV0NIBGAvH-QC8J38UI3Tkkw64zo-Ge9JcP68XQ/viewform?embedded=true" width="100%" height="1240" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>

            <div class = "grid-item RightSide">
            <p id="blocktext-title"> Contact Us </p>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf3H7lxCJon4Gl2AWxA7fO5xFQjSX1ZemM9DmaIbepK6pV2yg/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
    );
}

export default Contact;
