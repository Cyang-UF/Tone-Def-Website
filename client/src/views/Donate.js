import React from "react";


class Donate extends React.Component{

    render() {
        return (
            <div>
               
                
                <div class = "grid-container">
                    
                    <div class = "grid-item LeftSide"> 
                    <p id="blocktext">  Donate </p>
                    </div>

                    <div class = "grid-item RightSide">
                        <p id="blocktext"> API </p>
                        <div class="footer">
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                            <a href="https://open.spotify.com/artist/7qJdYIQOTw75BsL7o9NaKh?si=Lckb9eFBSmuRFbNDEkknjA&nd=1" class="fa fa-spotify fa-3x"></a>
                            <a href="https://www.instagram.com/tdacappella/" class="fa fa-instagram fa-3x"></a>
                            <a href="https://www.youtube.com/channel/UCfMtsN-sww0t6d6wv0j983A" class="fa fa-youtube fa-3x"></a>
                            <a href="https://www.facebook.com/tdacappella" class="fa fa-facebook fa-3x"></a>
                        </div>         
                    </div>

                </div>
            </div>
        );
    }
}

export default Donate;