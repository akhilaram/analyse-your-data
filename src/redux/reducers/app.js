import { ASSET_FORM, ASSET_CHART, CARBON_INTENSITY_DATA } from "../actionTypes";

const app = (
  state = {
    formData: [],
    carbonData: [],
    chartData: [],
  },
  action = {}
) => {
  switch (action.type) {
    case ASSET_FORM:
      return {
        ...state,
        formData: action.payload,
      };
    case ASSET_CHART:
      return {
        ...state,
        chartData: action.payload,
      };
    case CARBON_INTENSITY_DATA:
      return {
        ...state,
        carbonData: action.payload,
      };
    default:
      return state;
  }
};

export default app;
