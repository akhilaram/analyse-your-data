import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setAssetFormData, setAssetChartData } from "../../redux/actions";

import HookTextField from "../../components/HookTextField";
import Chart from "../../components/Chart";
import { assetChartOptions } from "../../constants";
import { Button, Grid, Typography } from "@mui/material";

const Asset1 = () => {
  const { app } = useSelector((state) => state);
  const { chartData, formData } = app;
  const disptach = useDispatch();
  const methods = useForm({
    mode: "onBlur",
    reValidation: "onBlur",
  });

  const validateTextField = (v, label) => {
    if (label === "min")
      return (v <= 0 && v >= -100) || "Please enter value from -100 to 0";
    else if (label === "max")
      return (v <= 100 && v >= 0) || "Please enter value from 0 to 100";
    else return;
  };
  const validateDate = (v) => {
    return;
  };
  const dateToday = () => {
    const today = new Date().toISOString().split("T")[0] + "T23:59";
    return today;
  };
  const onSubmit = (data) => {
    const chart = [
      {
        group: "Asset 1",
        date: data.dateTime,
        value: data.min,
      },
      {
        group: "Asset 1",
        date: data.dateTime,
        value: data.max,
      },
    ];
    disptach(setAssetFormData([...formData, data]));
    disptach(setAssetChartData([...chartData, ...chart]));
    methods.reset();
  };
  return (
    <FormProvider {...methods}>
      <form
        data-component="analyse-form"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Typography variant="h6">Asset1</Typography>
        <Grid container spacing={1} mt={1} mb={1}>
          <HookTextField
            type="number"
            id="min"
            label="Min Value"
            max={0}
            min={-100}
            style={{ width: "200px" }}
            validation={{
              required: {
                value: true,
                message: "Please enter a value from -100 to 0",
              },
              validate: (v) => validateTextField(v, "min"),
            }}
          />
          <HookTextField
            type="number"
            id="max"
            label="Max Value"
            max={100}
            min={0}
            style={{ width: "200px" }}
            validation={{
              required: {
                value: true,
                message: "Please enter a value from 0 to 100",
              },
              validate: (v) => validateTextField(v, "max"),
            }}
          />
          <HookTextField
            type="datetime-local"
            id="dateTime"
            label="Date Picker"
            InputLabelProps={{
              shrink: true,
            }}
            max={dateToday()}
            validation={{
              required: {
                value: true,
                message: "Please enter date&Time before current time",
              },
              validate: validateDate,
            }}
          />
          <Grid item>
            <Button
              type="submit"
              variant="outlined"
              style={{ width: "150px", height: "55px" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
        <Grid>
          {chartData && chartData.length > 0 && (
            <Chart type="line" data={chartData} options={assetChartOptions} />
          )}
        </Grid>
      </form>
    </FormProvider>
  );
};

export default Asset1;
