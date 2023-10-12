import React from 'react';
import {TextField} from "@mui/material";

function RegUserInfo(props) {
    const {errors, values, onChange} = props;

    const propsName = {};
    if(errors.name) {
        propsName.error = true;
        propsName.helperText = errors.name;
    }

    const propsSurname = {};
    if(errors.surname) {
        propsSurname.error = true;
        propsSurname.helperText = errors.surname;
    }

    return (
        <>
            {/* User Name*/}
            <TextField
                className='input-style'
                value={values.name}
                name='name'
                onChange={onChange}
                label="Name"
                variant="outlined"
                {...propsName}
            />

            {/*User Surname*/}
            <TextField
                className='input-style'
                value = {values.surname}
                name='surname'
                onChange={onChange}
                label="Surname"
                variant="outlined"
                {...propsSurname}
            />

        </>
    )
}

export default RegUserInfo;