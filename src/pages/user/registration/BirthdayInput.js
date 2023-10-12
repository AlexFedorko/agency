import React from "react";
import { useField } from "formik";
import TextField from "@mui/material/TextField";

function BirthdayInput(props) {
    const { name, label, ...rest } = props;
    const [field, meta] = useField(name);

    // Calculate the minimum date allowed
    const currentDate = new Date();
    const minDate = new Date();
    minDate.setFullYear(currentDate.getFullYear() - 18);

    return (
        <TextField
            {...field}
            {...rest}
            label={label}
            type="date"
            inputProps={{
                max: minDate.toISOString().split("T")[0], // Format the maximum date as YYYY-MM-DD
            }}
            error={meta.touched && meta.error}
            helperText={meta.touched && meta.error ? meta.error : null}
        />
    );
}

export default BirthdayInput;
