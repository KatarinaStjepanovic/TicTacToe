import React from "react"
import "../style.css"


import Header from "./Header"
import Grid from "./Grid"
import Start from "./Start"
import Win from "./Win"

import { faX } from "@fortawesome/free-solid-svg-icons"
import { faO } from "@fortawesome/free-solid-svg-icons"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            player: 1,
            icons: Array(9).fill(null),
            isWin: false,
            isStart: true,
            wins:  {
               player1: 0,
               player2: 0
            },
            statusBar : []
        }

        this.handleClick = this.handleClick.bind(this)
        this.checkIfWon = this.checkIfWon.bind(this)
        this.startGame = this.startGame.bind(this)
        this.restartGame = this.restartGame.bind(this)
    }


    checkIfWon(player) {
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

            const winner = `player${player}`;
            const newWins = {
                ...this.state.wins,
                [winner]: this.state.wins[winner] + 1
            };

            this.setState({ wins: newWins });

            this.setState( prevState => { 
                return {
                    statusbar: prevState.statusBar.push(prevState.wins) 
                }
             }  
            )

           if (newWins.player1 === 3 || newWins.player2 === 3) {
                this.setState({ isWin: true });
            } else {
                this.setState({ icons: Array(9).fill(null) });
            }
            return;
          }
        }

        if( this.state.icons.every( icon  => icon !== null)){
            this.setState({ icons: Array(9).fill(null) });
              this.setState( prevState => { 
                return {
                    statusbar: prevState.statusBar.push(prevState.wins) 
                }
             }  
            )
        }



    }


    handleClick(ind) {
        const currentPLayer = this.state.player
        this.setState((prevState) => {
            if (prevState.icons[ind] !== null) return {}

            let newIcons = [...prevState.icons]
            newIcons[ind] = prevState.player === 1 ? faX : faO

            return {
                player: prevState.player === 1 ? 2 : 1
                ,icons: newIcons
            }
        }, () => this.checkIfWon(currentPLayer)
        )




    }


    startGame() {
        this.setState({ isStart: false })
    }

    restartGame(){
        this.setState ({
            player: 1,
            icons: Array(9).fill(null),
            isWin: false,
            isStart: false,
            wins:  {
               player1: 0,
               player2: 0
            },
            statusBar : []
        })
    }



    render() {
        if (this.state.isStart) {
            return (
                <Start startGame={this.startGame} />
            )
        } else if (this.state.isWin) {
            return(
                <Win player={this.state.player} restartGame = {this.restartGame} statusBar = {this.state.statusBar} />
            )

        } else {
            return (
                <div>
                    < Header player={this.state.player} />
                    < Grid player={this.state.player} icons={this.state.icons} handleClick={this.handleClick} wins = {this.state.wins}/>
                </div>
            )

        }


    }




}

export default App