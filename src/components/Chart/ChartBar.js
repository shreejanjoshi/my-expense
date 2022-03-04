import React from "react";
import './ChartBar.css';

const ChartBar = (props) => {

    // how much chartbar value should be filled
    let barFillHeight = '0%';

    if(props.max > 0){
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return(
        <div className="chart-bar">
            <div className="chart-bar__inner">
                {/* style attribute work little diffrently js obj as value */}
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
}

export default ChartBar;