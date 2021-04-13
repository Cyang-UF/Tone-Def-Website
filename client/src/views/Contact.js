import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <div>
                <div class = "grid-container">
                    
                    <div class = "grid-item LeftSide"> 
                    <p id="blocktext"> Bookings </p>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSexfojZHA17_FWHB0c7Dz2KhQVIzAxNh8pNo-MOIOY4xd2eUw/viewform?embedded=true" width="710" height="1240" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </div>

                    <div class = "grid-item RightSide">
                    <p id="blocktext"> Contact Us </p>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfg_d1mFuTWJxtv2GEjo54dpZPKCOGgWNc0DsrjIONHCGRPow/viewform?embedded=true" width="710" height="976" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </div>

                </div>
            </div>
        );
    }
}

export default Contact;
