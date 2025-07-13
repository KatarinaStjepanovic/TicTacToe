import React from "react"

function Win(props) {
    return (
        <div>Player {props.player === 1 ? 2 : 1} won!</div>
    )
}

export default Win