import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  // obj to num
  // map will return a brand new array which is just array of num 12 values
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  //   datapoint is array so we can use spread operartor
  const totalMaximun = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {/* datapoints choose your own name how many datapoint that many chart bar*/}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximun}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
