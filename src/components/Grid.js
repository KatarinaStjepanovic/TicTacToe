import React from "react"
import ClickContainer from "./ClickContainer"

function Grid(props) {
    const newClass = props.player === 1 ? "playerOne" : "playerTwo";
    const classes = `bodyGrid ${newClass}`;

    return (
        <div className={classes}>
            <div className="xoGrid" >
                {props.icons.map((el, ind) => {
                    return <ClickContainer key={ind} handleClick={() => props.handleClick(ind)} id={ind} icon={el} />
                })}
            </div>
        </div>
    )
}



export default Grid