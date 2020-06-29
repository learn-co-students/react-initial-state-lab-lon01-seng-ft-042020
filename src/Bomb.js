import React, {Component} from "react"

class Bomb extends Component{

// Initialize the state 
// Using a props passed into the Bomb Component
    constructor(props){
        super()
        this.state = { secondsLeft: props.initialCount}
    }

    goBoom = () => {
    return this.state.secondsLeft === 0 ?  
    "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`
    }
 
    render(){
        return (
         <div>
             {this.goBoom()}
         </div>
        )
    }
}

export default Bomb;
