import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function ClickContainer(props) {
    return (
        <div className="clickContainer" onClick={props.handleClick}>{props.icon ? <FontAwesomeIcon icon={props.icon} style={{ fontSize: "150px", }} className="icon" /> : null}</div>
    )
}


export default ClickContainer