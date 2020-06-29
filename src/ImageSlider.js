import React, {Component} from "react"

class ImageSlider extends Component{

// Initialize the currentSlideIndex state
    constructor(){
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

// Renders text stating the currentSlideIndex value 
    render(){
        return (
         <div>
         I am on slide {this.state.currentSlideIndex}
         </div>
        )
    }
}

export default ImageSlider;