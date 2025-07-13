import React from "react"
import "../style.css"


import Header from "./Header"
import Grid from "./Grid"
import Start from "./Start"
import Win from "./Win"
import Even from "./Even"

import { faX } from "@fortawesome/free-solid-svg-icons"
import { faO } from "@fortawesome/free-solid-svg-icons"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            player: 1,
            icons: Array(9).fill(null),
            isWin: false,
            isEven: false,
            isStart: true
        }

        this.handleClick = this.handleClick.bind(this)
        this.checkIfWon = this.checkIfWon.bind(this)
        this.startGame = this.startGame.bind(this)
    }


    checkIfWon() {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        let icons = this.state.icons;

        for (let combo of winningCombos) {
            const [a, b, c] = combo;
            if (
                icons[a] !== null &&
                icons[a] === icons[b] &&
                icons[a] === icons[c]
            ) {
                this.setState({ isWin: true })
                return;
            }
        }

        if (icons.every(icon => icon !== null)) {
            this.setState({ isEven: true })
        }

    }


    handleClick(ind) {
        this.setState((prevState) => {
            if (prevState.icons[ind] !== null) return {}

            let newIcons = [...prevState.icons]
            newIcons[ind] = prevState.player === 1 ? faX : faO

            return {
                player: prevState.player === 1 ? 2 : 1,
                icons: newIcons
            }
        }, this.checkIfWon
        )



    }


    startGame() {
        this.setState({ isStart: false })
    }


    render() {
        if (this.state.isStart) {
            return (
                <Start startGame={this.startGame} />
            )
        } else if (this.state.isWin) {
            return(
                <Win player={this.state.player} />
            )

        } else if (this.state.isEven) {
            return (
                < Even />
            )
        } else {
            return (
                <div>
                    < Header player={this.state.player} />
                    < Grid player={this.state.player} icons={this.state.icons} handleClick={this.handleClick} />
                </div>
            )

        }


    }




}

export default App