import React from "react";
import Background from "./Background";

export default class Slider extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            currentIndex: 0,
            transformVal: 0
        };
    }

    render(){
        return(
            <div className="slider">
                <div className="slider__wrapper"
                    style={{
                        transform: `translateX(${this.state.transformVal}px)`,
                        transition: "transform ease-out 0.50s"
                    }}>
                    <Background />
                </div>
            </div>
        );
    }
}
