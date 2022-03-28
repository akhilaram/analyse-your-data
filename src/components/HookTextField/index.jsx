import React from "react";
import { Grid, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

const HookTextField = ({ id, max, min, gridSize, validation, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Grid item>
      <TextField
        error={!!errors?.[id]}
        helperText={errors?.[id]?.message}
        id={id}
        {...rest}
        inputProps={{
          ...register(id, validation),
          max,
          min,
        }}
      />
    </Grid>
  );
};

export default HookTextField;
