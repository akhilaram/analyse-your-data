import { ASSET_CHART, ASSET_FORM, CARBON_INTENSITY_DATA } from "../actionTypes";
import Axios from "axios";

export const setCarbonData = (data) => ({
  type: CARBON_INTENSITY_DATA,
  payload: data,
});

export const setAssetFormData = (data) => ({
  type: ASSET_FORM,
  payload: data,
});
export const setAssetChartData = (data) => ({
  type: ASSET_CHART,
  payload: data,
});
export const getCarbonIntensity = (dispatch) => {
  const from = "2021-09-18T12:00Z";
  const to = "2021-10-01T12:00Z";
  Axios.get(`https://api.carbonintensity.org.uk/intensity/stats/${from}/${to}`)
    .then((response) => {
      let resultData = response.data.data;
      let carbonData = [];
      resultData.forEach((item) => {
        carbonData.push(
          {
            group: item.intensity.index,
            date: item.from,
            value: item.intensity.average,
            min: item.intensity.min,
            max: item.intensity.max,
          },
          {
            group: item.intensity.index,
            date: item.to,
            value: item.intensity.average,
            min: item.intensity.min,
            max: item.intensity.max,
          }
        );
      });
      dispatch(setCarbonData(carbonData));
    })
    .catch((error) => {
      console.log(error);
    });
};
