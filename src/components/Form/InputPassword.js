import React, {memo, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {FormHelperText} from "@mui/material";

function InputPassword(props) {
    const {value, onChange, name, error, helperText, label} = props;
    const isError = !!error;

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (

        <FormControl className='input-style' error={isError} variant="standard">
            <InputLabel>{label}</InputLabel>
            <Input
                name={name}
                value={value}
                onChange={onChange}
                label="Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                autoComplete='current-password'
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                        </IconButton>
                    </InputAdornment>
                }
            />
            <FormHelperText>{isError ? helperText : ' '}</FormHelperText>
        </FormControl>


    );
}

export default memo(InputPassword);