import React from "react"

function StatusTotal(props) {
    return (
        <div className="finalDisplay"> 
            <div className="totalText">Total</div>

            <div className="finalDiv">
                <div className="leftRes">{props.final.player1}</div>
                <div className="rightRes">{props.final.player2}</div>
            </div>
        </div>
    )
}

export default StatusTotal