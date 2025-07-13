import React from "react"

function Start(props){
     return(
        <div className="bodyStart">
            <h1 className="startH1">Welcome to X O game!</h1>
            <hr className="startHr"/>
            <h3 className="startH3">Press start to begin. GOOD LUCK!</h3>
        <button onClick = {props.startGame} className="startBtn">Start</button>
        </div>
     )
}

export default Start
