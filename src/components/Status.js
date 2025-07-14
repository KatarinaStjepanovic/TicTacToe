import React from "react"
import StatusResult from "./StatusResult"
import StatusTotal from "./StatusTotal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"



function Status(props){
    return (
         <div className="statusBody">
            <div className="statusBg">
                <FontAwesomeIcon icon= {faX} style={{color: "#472c40", position: "absolute", right: "33%", top: "13%", fontSize: "25px"}} onClick ={props.handleX} />
                <div className="left">
                    <div className="statusPlOne">Player 1</div>
                </div>
                <div className="right">
                    <div className="statusPlTwo">Player 2</div>
                </div>
                <hr className="verticalHr"/>
                <hr className="horizontalHr" />
                <div className="statusResults"  style={ {overflowY: props.statusBar.length > 5   ? "scroll" : "hidden"}} >
                   {props.statusBar.map( (status, ind) => {
                    console.log(status);
                    if( ind === props.statusBar.length-1){
                        return < StatusTotal final = {status} />
                    }
                       return <StatusResult key = {ind} status = {status} />
                          
                   })}

                </div>
            </div>
        </div>
    )
}


export default Status