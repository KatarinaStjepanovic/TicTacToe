import React from "react"

function StatusResult(props){
    return(
         <div className= "resultsDiv">
                    <div className="leftRes"> {props.status.player1}</div>
                    <div className="rightRes">{props.status.player2}</div>
         </div>
    )
}


export default StatusResult