import React from "react"

function Header(props){
    const newClass = props.player === 1 ? "headerOne" : "headerTwo"
    return(
        <header className={newClass} >Player {props.player}</header>
    )
}

export default Header