import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {memo} from "react";

function RowRadioButtonsGroup(props) {
     const {errors, values, onChange} = props;

     const propsGender = {};
     if (errors.gender) {
         propsGender.error = true;
         propsGender.helperText = errors.gender;
    }

    return (
        <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
                name='gender'
                value={values.gender}
                onChange={onChange}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                {...propsGender}
            >
                <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                />
                <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                />
                <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                />
            </RadioGroup>
        </FormControl>
    );
}

export default memo(RowRadioButtonsGroup);