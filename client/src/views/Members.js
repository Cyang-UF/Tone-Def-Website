import React from "react";

class Members extends React.Component{
    
    render() {
        return (
            <div>
                <div class = "grid-container">

                    <div class = "grid-item LeftSide"> 
                    <p id="blocktext">  Existing Member Login </p>
                    </div>

                    <div class = "grid-item RightSide">
                    <p id="blocktext"> New Member Info </p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Members;