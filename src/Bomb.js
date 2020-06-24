import React, { Component } from 'react';

export default class Bomb extends React.Component {

    //props that the component gets from its parent
    constructor(props) {
        // debugger
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        return (
            <div id="bomb">
                 {this.state.secondsLeft === 0
                 ? "Boom!"
                 : `${this.state.secondsLeft} seconds left before I go boom!`}
            </div>
        )
    }
}