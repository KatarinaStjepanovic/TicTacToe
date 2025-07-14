import React from "react"
import Status from "./Status"

class Win extends React.Component {
    constructor(){
        super();
       this.state = {
          showStatus: false
       }

       this.showStatus = this.showStatus.bind(this)
       this.handleX = this.handleX.bind(this)
    }

    showStatus(){
       this.setState ({showStatus : true})
    }

    handleX(){
       this.setState( {showStatus : false})
    }


   render(){ 
    const newClass = this.props.player === 2? "plOneWin" : "plTwoWin";
    const classes = `bodyWin ${newClass}`;

     return (
       !this.state.showStatus ?  
       <div className={classes}>
            <div className="wave-container">
            <h1 className="wave-text">
                <span>C</span>
                <span>O</span>
                <span>N</span>
                <span>G</span>
                <span>R</span>
                <span>A</span>
                <span>T</span>
                <span>U</span>
                <span>L</span>
                <span>A</span>
                <span>T</span>
                <span>I</span>
                <span>O</span>
                <span>N</span>
                <span>S</span>
                <span>!</span>
            </h1>
        </div>
           <div className="playerWin">Player {this.props.player === 1 ? 2 : 1} wins</div>
           <div className="buttonsWin">
            <button onClick={this.props.restartGame}>Restart</button>
            <button onClick = {this.showStatus}>Chack status</button>

           </div>
        </div> : < Status statusBar = {this.props.statusBar} handleX = {this.handleX} />
                     
    ) 
  }
}

export default Win