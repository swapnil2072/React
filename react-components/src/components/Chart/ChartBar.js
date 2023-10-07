import React from "react";

import "./ChartBar.css";
import Chart from "./Chart";

const ChartBar = (props) => {
    let barFillHeight = '0%'
    if(props.max>0){
        barFillHeight = Math.round((props.value/props.maxValue)*100) + '%'
    }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__filler" style={{height:barFillHeight}}></div>
        <div className="chart-bar__label">{props.label}</div>
      </div>
    </div>
  );
};

export default ChartBar;
