import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarbonIntensity } from "../../redux/actions";
import Chart from "../../components/Chart";
import { carbonChartOptions } from "../../constants";

const CarbonIntensity = () => {
  const disptach = useDispatch();
  const { app } = useSelector((state) => state);
  const { carbonData } = app;

  useEffect(() => {
    disptach(getCarbonIntensity);
  }, [disptach]);

  return (
    <>
      {carbonData && carbonData.length > 0 && (
        <Chart type="area" data={carbonData} options={carbonChartOptions} />
      )}
    </>
  );
};

export default CarbonIntensity;
