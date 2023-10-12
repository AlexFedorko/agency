import * as React from 'react';
import TextField from '@mui/material/TextField';

function CityRegInput(props) {
    const {errors, values, onChange} = props;

    const propsCity = {};
    if (errors.city) {
        propsCity.error = true;
        propsCity.helperText = errors.city;
        // propsCity = {
        //     error: true,
        //     helperText: errors.city
        // }
    }

    const propsPostcode = {};
    if (errors.index) {
        propsPostcode.error = true;
        propsPostcode.helperText = errors.postcode;
    }

    return (
        <>
            <TextField
                value={values.city}
                name='city'
                onChange={onChange}
                label="City"
                {...propsCity}
            />
            <TextField
                value={values.postcode}
                name='postcode'
                onChange={onChange}
                label="Post code"
                {...propsPostcode}
            />
        </>
    );
}

export default CityRegInput;