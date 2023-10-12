import React, {memo} from "react";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {FormHelperText} from "@mui/material";

function InputLogin(props) {
    const {value, onChange, name, error} = props;


    const isError = !!error;
    return (
        <FormControl className ='input-style' error={isError} variant="standard">
            <InputLabel>Login</InputLabel>
            <Input
                type='text'
                name={name}
                value={value}
                placeholder="Enter account name"
                onChange={onChange}
                autoComplete='username'
            />
            <FormHelperText>{isError ? error : ' '}</FormHelperText>
        </FormControl>
    );
}

export default memo(InputLogin);


/* import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

export default function InputLogin() {

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                <TextField
                    label=""
                    id="standard-start-adornment"
                    sx={{ m: 1, width: '50ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Login</InputAdornment>,
                    }}
                    variant="standard"
                />
            </div>
        </Box>
    );
}

 */