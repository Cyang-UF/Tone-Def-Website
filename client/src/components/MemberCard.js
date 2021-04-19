import React from "react";

function MemberCard(props) {    
    return(
        <div class="card" style={{borderRadius: "1rem"}}>
        <img src={props.src} class = "cardImg" />
        <div style={{fontSize: "1.3rem", marginLeft: "1rem", marginRight: "1rem" }}>
            <p><strong>{props.title}</strong></p>
        </div>
        <div style={{fontSize: "1.1rem", marginLeft: "1rem", marginRight: "1rem", lineHeight: "1rem"}}>
            <p><strong>{props.part}</strong></p>
            <p>{props.hometown}</p>
            <p>{props.major}</p>
            <p>{props.joined}</p>
            <p>{props.song}</p>
        </div>
    </div>
    );
}


export default MemberCard;