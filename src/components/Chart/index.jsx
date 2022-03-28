import React from "react";
import { LineChart, AreaChart } from "@carbon/charts-react";

const Chart = ({ data, options, type, ...rest }) => {
  return (
    <>
      {type === "line" ? (
        <LineChart data={data} options={options} {...rest}></LineChart>
      ) : (
        <AreaChart data={data} options={options} {...rest}></AreaChart>
      )}
    </>
  );
};
export default Chart;
