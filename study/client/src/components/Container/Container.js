import React from "react";

 const Container= props => {
    return
        <div className={`congainer${props.fluid ? "-fluid" : "" }`}{...props}/>
 };

 export default Container;