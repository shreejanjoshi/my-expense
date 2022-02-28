import './Card.css';
import React from "react";

function Card(props){
    // class to style
    const classes = 'card ' + props.className;
    return(
        <div className={classes}>{props.children}</div>
    );
}

export default Card;