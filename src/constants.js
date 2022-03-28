export const assetChartOptions = {
  title: "Asset 1 - analysis Data",
  width: "800px",
  axes: {
    bottom: {
      scaleType: "time",
      mapsTo: "date",
      ticks: {
        rotation: "always",
      },
    },
    left: {
      mapsTo: "value",
    },
  },
  legend: {
    clickable: false,
  },
  height: "400px",
};

export const carbonChartOptions = {
  title: "Carbon Intenstiy",
  legend: {
    enabled: false,
  },
  bounds: {
    upperBoundMapsTo: "max",
    lowerBoundMapsTo: "min",
  },
  axes: {
    bottom: {
      title: "Time",
      mapsTo: "date",
      scaleType: "time",
    },
    left: {
      mapsTo: "value",
      scaleType: "linear",
    },
  },
  curve: "curveNatural",
  height: "400px",
};
